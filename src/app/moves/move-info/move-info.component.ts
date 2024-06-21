import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";

import { MoveData } from "../move-data";


@Component({
  selector: 'app-move-info',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './move-info.component.html',
  styleUrl: './move-info.component.css'
})
export class MoveInfoComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public move: MoveData) {}

}
