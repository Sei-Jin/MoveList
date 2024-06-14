import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

import { MoveListComponent } from "./moves/move-list/move-list.component";

import { NavigationIconsService } from "./navigation/navigation-icons.service";
import { SidenavButtonsComponent } from "./navigation/sidenav-buttons/sidenav-buttons.component";
import { MoveIconsService } from "./moves/move-icons.service";


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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  constructor(
    private navigationIconsService: NavigationIconsService,
    private moveIconsService: MoveIconsService
  ) {}
}
