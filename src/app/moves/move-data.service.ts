import { Injectable } from '@angular/core';
import { MoveData } from "./move-data";
import moveDataRaw from "../../assets/character-data/Alisa.json";

@Injectable({
  providedIn: 'root'
})
export class MoveDataService {

  constructor() { }

  moves: MoveData[] = moveDataRaw;

  getMoves() {
    return this.moves;
  }
}
