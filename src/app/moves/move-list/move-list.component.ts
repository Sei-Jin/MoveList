import { Component, inject } from '@angular/core';

import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Router } from "@angular/router";

import { MoveDataService } from "../move-data.service";
import { MoveDescriptionParserService } from "../move-description-parser.service";
import { MoveSequenceParserService } from "../move-sequence-parser.service";

import { MoveData } from "../move-data";
import { ParsedDescription } from "../parsed-description";
import { MovePropertiesParserService } from "../move-properties-parser.service";
import { MoveSequence } from "../move-sequence";


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

  constructor(
    private moveDataService: MoveDataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

    private moveDescriptionParserService: MoveDescriptionParserService,
    private moveSequenceParserService: MoveSequenceParserService,
    private movePropertiesParserService: MovePropertiesParserService
  ) {}

  ngOnInit(): void {
    this.getCurrentRoute()
    this.loadCharacterData();
  }

  moves: MoveData[] = [];
  character: string = "";

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


  parsedDescription: ParsedDescription[] = [];

  parseDescription(type: string) {
    this.parsedDescription = this.moveDescriptionParserService.splitString(type);
  }


  moveSequence: MoveSequence[] = [];

  parseMoveSequence(type: string) {
    this.moveSequence = this.moveSequenceParserService.getInputValues(type);
  }


  moveProperties: string[] = [];

  parseMoveProperties(properties: string) {
    this.moveProperties = this.movePropertiesParserService.getProperties(properties);
  }
}
