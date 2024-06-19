import { Injectable } from '@angular/core';

import { MoveSequence } from "./move-sequence";

@Injectable({
  providedIn: 'root'
})
export class MoveSequenceParserService {


  /**
   * Return an array of strings, with each string representing one input in the move sequence.
   *
   * @param moveSequence a string of inputs, separated by commas.
   */
  getInputValues(moveSequence: string): MoveSequence[] {
    return moveSequence.split(',').map((value, index) => ({
      id: index,
      value: value,
    }));
  }


}
