import { Injectable } from '@angular/core';
import { ParsedDescription } from "./parsed-description";


@Injectable({
  providedIn: 'root'
})
export class MoveDescriptionParserService {


  /**
   * Given the description of a move, separate the text from the move sequences.
   * The text is the parts that are not in curly braces, and the move sequences are the parts that are in curly braces.
   *
   * @param input the description of a move
   */
  splitString(input: string): ParsedDescription[]
  {
    const parts: ParsedDescription[] = [];
    const regex = /{([^}]+)}|([^{}]+)/g;
    let match;
    let id = 0;

    while (match = regex.exec(input))
    {
      if (match[1] !== undefined)
      {
        parts.push({ id: id++, text: match[1], moveSequence: true });
      }
      else if (match[2] !== undefined)
      {
        parts.push({ id: id++, text: match[2], moveSequence: false });
      }
    }

    return parts;
  }
}
