import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MoveListComponent} from "./moves/move-list/move-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MoveListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'MoveList';
}
