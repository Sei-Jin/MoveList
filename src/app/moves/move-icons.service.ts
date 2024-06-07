import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class MoveIconsService {

  buttonInputs: string[] = [
    "1", "2", "3", "4",
    "1+2", "1+3", "1+4", "2+3", "2+4", "3+4",
    "1+2+3", "1+2+4", "1+3+4", "2+3+4",
    "1+2+3+4",
  ];

  movementInputs: string[] = [
    "f", "uf", "u", "ub", "b", "db", "d", "df",
    "f-hold", "uf-hold", "u-hold", "ub-hold", "b-hold", "db-hold", "d-hold", "df-hold"
  ]

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)
  {
    for (let buttonInput of this.buttonInputs)
    {
      iconRegistry.addSvgIcon(
        buttonInput,
        sanitizer.bypassSecurityTrustResourceUrl('/assets/inputs/button/' + buttonInput + '.svg')
      );
    }

    for (let movementInput of this.movementInputs)
    {
      iconRegistry.addSvgIcon(
        movementInput,
        sanitizer.bypassSecurityTrustResourceUrl(`/assets/inputs/movement/${movementInput}.svg`)
      );
    }
  }
}
