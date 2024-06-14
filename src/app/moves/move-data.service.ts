import { Injectable } from '@angular/core';
import { MoveData } from "./move-data";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class MoveDataService {

  constructor(private http: HttpClient) { }

  getCharacterData(character: string): Observable<MoveData[]> {
    const characterDataPath = `../../assets/data/character-data/${character}.json`;
    return this.http.get<MoveData[]>(characterDataPath);
  }
}
