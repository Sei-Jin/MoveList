import { Component } from '@angular/core';

import { MatButtonModule } from "@angular/material/button";

import characterList from "../../../assets/data/CharacterList.json"


interface CharacterList {
  "id": number
  "name": string
}


@Component({
  selector: 'app-sidenav-buttons',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './sidenav-buttons.component.html',
  styleUrl: './sidenav-buttons.component.css'
})


export class SidenavButtonsComponent {

  characterList: CharacterList[] = characterList;

}
