import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

import { MoveDataService } from "../move-data.service";
import { MoveDescriptionParserService } from "../move-description-parser.service";
import { MoveSequenceParserService } from "../move-sequence-parser.service";
import { MovePropertiesParserService } from "../move-properties-parser.service";

import { MoveData } from "../move-data";
import { ParsedDescription } from "../parsed-description";
import { MoveSequence } from "../move-sequence";
import { MatButton } from "@angular/material/button";
import { MatRipple } from "@angular/material/core";
import { FooterComponent } from "../../footer/footer.component";
import { MatDialog } from "@angular/material/dialog";
import { MoveInfoComponent } from "../move-info/move-info.component";


@Component({
  selector: 'app-move-list',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatButton,
    MatRipple,
    FooterComponent,
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
    private movePropertiesParserService: MovePropertiesParserService,

    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCurrentRoute()
    this.loadCharacterData();
  }

  moves: MoveData[] = [];
  characterName: string = "";

  getCurrentRoute(): void {
    this.characterName = this.activatedRoute.snapshot.url[0].path;
  }

  private loadCharacterData(): void {
    this.moveDataService.getCharacterData(this.characterName).subscribe(data => {
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


  openDialog(move: MoveData) {
    this.dialog.open(MoveInfoComponent, {
      data: {
        move: move,
        characterName: this.characterName,
      },
    });
  }
}
