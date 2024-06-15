import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class MovePropertiesParserService {


  /**
   * Return an array of strings, with each string representing one property from the list of move properties
   *
   * @param moveProperties a string of properties, separated by commas. There may be whitespace between them.
   */
  getProperties(moveProperties: string): string[] {
    return moveProperties.split(',').map(string => string.trim());
  }


}
