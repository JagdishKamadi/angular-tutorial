import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(tap((users) => console.log('Users: ', users)));
  }
}
