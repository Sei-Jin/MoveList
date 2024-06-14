import { Component, inject } from '@angular/core';

import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Router } from "@angular/router";

import { MoveIconsService } from "../move-icons.service";
import { MoveDataService } from "../move-data.service";
import { MoveDescriptionParserService } from "../move-description-parser.service";
import { MoveInputParserService } from "../move-input-parser.service";

import { MoveData } from "../move-data";
import { ParsedDescription } from "../parsed-description";


@Component({
  selector: 'app-move-list',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './move-list.component.html',
  styleUrl: './move-list.component.css',
})


export class MoveListComponent {

  moves: MoveData[] = [];
  character: string = "";

  constructor(
    private moveIconsService: MoveIconsService,
    private moveDataService: MoveDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCurrentRoute()
    this.loadCharacterData();
  }

  getCurrentRoute(): void {
    this.character = this.activatedRoute.snapshot.url[0].path;
  }

  private loadCharacterData(): void {
    this.moveDataService.getCharacterData(this.character).subscribe(data => {
      this.moves = data;
    });
  }



  previousType: string = "";

  updatePreviousType(type: string) {
    this.previousType = type;
  }


  private moveDescriptionParserService = inject(MoveDescriptionParserService);

  parsedDescription: ParsedDescription[] = [{ text: "", moveSequence: false }];

  parseDescription(type: string) {
    this.parsedDescription = this.moveDescriptionParserService.splitString(type);
  }


  private moveInputParserService = inject(MoveInputParserService);

  moveSequence: string[] = [];

  parseMoveSequence(type: string) {
    this.moveSequence = this.moveInputParserService.getInputValues(type);
  }
}
