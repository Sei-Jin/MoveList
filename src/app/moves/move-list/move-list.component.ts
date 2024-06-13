import { Component, inject } from '@angular/core';

import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

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

  moves: MoveData[];

  constructor(
    moveIconsService: MoveIconsService,
    moveDataService: MoveDataService,
  ) {
    this.moves = moveDataService.getMoves();
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
