import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  items: number[] = [11, 22, 33];
  getNumber(): Observable<number> {
    return new Observable((observer) => {
      this.items.forEach((item) => observer.next(item));
      observer.complete;
    });
  }
}
