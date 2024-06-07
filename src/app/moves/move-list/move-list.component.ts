import {Component, Inject} from '@angular/core';
import { MatListModule } from "@angular/material/list";
import moveDataRaw from "../../../assets/character-data/Alisa.json";
import { MatIconModule } from "@angular/material/icon";
import { MoveIconsService } from "../move-icons.service";

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

  constructor(private service: MoveIconsService) {}

  previousType: string = "";
  moves: MoveData[] = moveDataRaw;

  updatePreviousType(type: string) {
    this.previousType = type;
  }
}
