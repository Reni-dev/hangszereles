import { Component } from '@angular/core';
import { NoteService } from '../shared/note-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  imports: [CommonModule],
  templateUrl: './note.html',
  styleUrl: './note.css',
})
export class Note{ 
  constructor(
    public noteApi: NoteService
  ) {}
}
