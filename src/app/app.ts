import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Note } from './note/note';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Note],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('hangszereles_frontend');
}
