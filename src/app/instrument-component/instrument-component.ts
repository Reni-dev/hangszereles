import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../shared/instrument-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../shared/note-service';

export interface Instrument {
  id: number;
  name: string;
  type: string;
  itemNumber: number;
  price: number;
  category: string;
}


@Component({
  selector: 'app-instrument-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './instrument-component.html',
  styleUrl: './instrument-component.css',
  standalone: true
})

export class InstrumentComponent implements OnInit {
  instruments: Instrument[] = []

  newInstrument = {
    name: '',
    type: '',
    itemNumber: 0,
    price: 0,
    category: ''
  }

  constructor(
    private instrumentApi: InstrumentService,
    private noteApi: NoteService
  ){}

  ngOnInit(){
    this.getInstruments()
  }

  getInstruments(){
    this.instrumentApi.getInstruments().subscribe(data => {
      this.instruments = data
    })
  }

  addInstrument() {
    const name = this.newInstrument.name;
    this.instrumentApi.addInstrument(this.newInstrument).subscribe(() => {
      this.getInstruments()
      this.noteApi.show(`Sikeresen hozzáadva: ${name}`)
    })
    this.resetForm()
  }

  resetForm() {
    this.newInstrument = {
      name: '',
      type: '',
      itemNumber: 0,
      price: 0,
      category: ''
    }
  }

}
