import { Routes } from '@angular/router';

import { MoveListComponent } from "./moves/move-list/move-list.component";
import { PageNotFoundComponent } from "./navigation/page-not-found/page-not-found.component";

import characterList from "../assets/data/CharacterList.json"
import { CharacterList } from "./data/character-list";


const characters: CharacterList[] = characterList;


export const routes: Routes = [
  { path: "**", component: PageNotFoundComponent }
];


for (const character of characters)
{
  routes.unshift({ path: character.name, component: MoveListComponent });
}
