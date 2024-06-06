import { Component } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import moveDataRaw from "../../../character-data/Alisa.json";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { HttpClientModule} from "@angular/common/http";
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
    HttpClientModule
  ],
  templateUrl: './move-list.component.html',
  styleUrl: './move-list.component.css'
})
export class MoveListComponent {

  previousType: string = "";
  moves: MoveData[] = moveDataRaw;

  updatePreviousType(type: string) {
    this.previousType = type;
  }
}
