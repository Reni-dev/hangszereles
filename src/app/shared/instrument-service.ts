import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

export interface Instrument {
  id: number;
  name: string;
  type: string;
  itemNumber: number;
  price: number;
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class InstrumentService {
  private instruments: Instrument[] = [
    { id: 1, name: 'hegedű', type: 'Soundsation PV-116', itemNumber: 343823, price: 37400, category: 'vonós' },
    { id: 2, name: 'hegedű', type: 'Soundsation PVI-34', itemNumber: 348924, price: 38670, category: 'vonós' },
    { id: 3, name: 'hegedű', type: 'Soundsation VSVI-12', itemNumber: 348922, price: 52300, category: 'vonós' },
    { id: 4, name: 'hegedű', type: 'Soundsation E-master', itemNumber: 358421, price: 102400, category: 'vonós' },
    { id: 5, name: 'cselló', type: 'Soundsation PCE-12', itemNumber: 438438, price: 172500, category: 'vonós' },
    { id: 6, name: 'cselló', type: 'Soundsation PCE-44', itemNumber: 493484, price: 168000, category: 'vonós' },
    { id: 7, name: 'cselló', type: 'Soundsation VSCE-12', itemNumber: 438483, price: 211000, category: 'vonós' },
    { id: 8, name: 'cselló', type: 'Soundsation VPCE-44', itemNumber: 482948, price: 512000, category: 'vonós' },
    { id: 9, name: 'brácsa', type: 'Soundsation VIOVS-15', itemNumber: 483433, price: 89000, category: 'vonós' },
    { id: 10, name: 'brácsa', type: 'Soundsation VIOVS-16', itemNumber: 482934, price: 77800, category: 'vonós' },
    { id: 11, name: 'klarinét', type: 'Soundsation SCL-10E', itemNumber: 534323, price: 89300, category: 'fúvós' },
    { id: 12, name: 'klarinét', type: 'Soundsation SCL-20', itemNumber: 534328, price: 130100, category: 'fúvós' },
    { id: 13, name: 'fuvola', type: 'Soundsation SFL-10E', itemNumber: 543234, price: 97500, category: 'fúvós' },
    { id: 14, name: 'fuvola', type: 'Soundsaton SFP-10', itemNumber: 548934, price: 119000, category: 'fúvós' },
    { id: 15, name: 'furulya', type: 'Angel ASRG-50', itemNumber: 553282, price: 1100, category: 'fúvós' },
    { id: 16, name: 'furulya', type: 'SUZUKI SRE-80', itemNumber: 554838, price: 2100, category: 'fúvós' },
    { id: 17, name: 'furulya', type: 'AULOS 203A', itemNumber: 559234, price: 4200, category: 'fúvós' },
    { id: 18, name: 'furulya', type: 'AULOS 309A', itemNumber: 558923, price: 14700, category: 'fúvós' },
    { id: 19, name: 'trombita', type: 'Soundsation', itemNumber: 569843, price: 129000, category: 'fúvós' },
    { id: 20, name: 'trombita', type: 'Soundsation', itemNumber: 567344, price: 117000, category: 'fúvós' }
  ]

  getInstruments() {
    return of(this.instruments).pipe(delay(500))
  }

  addInstrument(instrument: Omit<Instrument, 'id'>) {
    const newInstrument: Instrument = {
      ...instrument,
      id: this.instruments.length + 1
    }

    this.instruments.push(newInstrument);
    return of(newInstrument).pipe(delay(300))
  }
}
