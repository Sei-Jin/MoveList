import { Component } from '@angular/core';

import { MatButtonModule } from "@angular/material/button";

import { CharacterListService } from "../../data/character-list.service";
import { CharacterList } from "../../data/character-list";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-sidenav-buttons',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './sidenav-buttons.component.html',
  styleUrl: './sidenav-buttons.component.css'
})


export class SidenavButtonsComponent {

  constructor(private characterListService: CharacterListService) {}

  characterList: CharacterList[] = this.characterListService.getCharacterList();
}
