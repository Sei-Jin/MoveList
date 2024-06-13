import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoveListComponent } from "./moves/move-list/move-list.component";
import { NavbarComponent } from "./navigation/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MoveListComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MoveList';
}
