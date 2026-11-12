import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map((users) => users.filter((u) => u.name.startsWith('C'))));
  }
}
