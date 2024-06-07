import { Component } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import moveDataRaw from "../../../assets/character-data/Alisa.json";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

export interface MoveData {
  "Id": number;
  "Type": string;
  "Name": string;
  "Description": string | number;
  "Properties": string;
  "Comment": string;
}

@Component({
  selector: 'app-move-list',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './move-list.component.html',
  styleUrl: './move-list.component.css',
  providers: []
})
export class MoveListComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      "1",
       sanitizer.bypassSecurityTrustResourceUrl("/assets/inputs/button/1.svg")
    );
  }

  previousType: string = "";
  moves: MoveData[] = moveDataRaw;

  updatePreviousType(type: string) {
    this.previousType = type;
  }
}
