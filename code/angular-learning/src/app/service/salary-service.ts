import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  getSalaryDetails(salary: number, bonus: number): number {
    return salary + bonus;
  }
}
