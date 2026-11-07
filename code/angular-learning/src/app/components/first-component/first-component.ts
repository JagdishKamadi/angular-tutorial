import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SalaryService } from '../../service/salary-service';

@Component({
  selector: 'my-first-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {
  salary: number = 1000;
  bonus: number = 100;
  finalSalary: number | null = null;
  constructor(private salaryService: SalaryService) {
    this.finalSalary = this.salaryService.getSalaryDetails(this.salary, this.bonus);
  }

  displayedSalary: number | null = null;

  getSalary() {
    this.displayedSalary = this.finalSalary;
    console.log('Final salary:', this.displayedSalary);
  }
}
