import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private messageSource = new BehaviorSubject<string | null>(null)
  message$ = this.messageSource.asObservable()

  show(message: string) {
    this.messageSource.next(message)

    setTimeout(() => {
      this.messageSource.next(null)
    }, 3000)
  }
}
