import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Injectable({
  providedIn: 'root'
})


export class NavigationIconsService {


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer)
  {
    iconRegistry.addSvgIcon(
      "github-mark",
      sanitizer.bypassSecurityTrustResourceUrl(`/assets/logos/github-mark.svg`)
    );
  }


}
