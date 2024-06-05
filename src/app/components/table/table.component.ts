import { Component } from '@angular/core';
import { MatTableModule} from "@angular/material/table";
import { MatRipple } from "@angular/material/core";
import moveData from "../../../character-data/Alisa.json"


interface Move
{
  Id: number;
  Type: string;
  Name: string;
  Description: string | number;
  Properties: string;
  Comment: string;
}

const ELEMENT_DATA: Move[] = moveData;

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatRipple
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource = ELEMENT_DATA;
}
