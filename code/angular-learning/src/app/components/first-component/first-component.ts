import { CommonModule } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-first-component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {
  normalCount: number = 0;
  signalCount = signal(0);
  public increment(): void {
    this.normalCount++;
  }
  public signalIncrement(): void {
    this.signalCount.set(this.signalCount() + 1);
  }
}
