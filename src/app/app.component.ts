import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { MatSidenavModule} from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

import { MoveListComponent } from "./moves/move-list/move-list.component";
import { SidenavButtonsComponent } from "./navigation/sidenav-buttons/sidenav-buttons.component";

import { NavigationIconsService } from "./navigation/navigation-icons.service";
import { MoveIconsService } from "./moves/move-icons.service";
import { NgOptimizedImage } from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MoveListComponent,
    SidenavButtonsComponent,
    NgOptimizedImage,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  constructor(
    private navigationIconsService: NavigationIconsService,
    private moveIconsService: MoveIconsService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.characterName = event.url.substring(1).replace("%20", " ");
      }
    });
  }

  characterName: string = "";
}
