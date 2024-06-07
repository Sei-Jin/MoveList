import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class MoveInputParserService {


  /**
   * Return an array of strings, with each string representing one input in the move sequence.
   *
   * @param moveSequence a string of inputs, separated by commas.
   */
  getInputValues(moveSequence: string): string[] {
    return moveSequence.split(',').map(string => string.trim());
  }


}
