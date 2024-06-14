import { Injectable } from '@angular/core';

import characterList from "../../assets/data/CharacterList.json"
import { CharacterList } from "./character-list";


@Injectable({
  providedIn: 'root'
})


export class CharacterListService {

  constructor() { }

  getCharacterList(): CharacterList[] {
    return characterList;
  }
}
