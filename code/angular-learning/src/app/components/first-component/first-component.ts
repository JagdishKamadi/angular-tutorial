import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ObservableService } from '../../service/observable-service';

@Component({
  selector: 'my-first-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent implements OnInit {
  items: number[] = [];
  constructor(private observableService: ObservableService) {}

  ngOnInit(): void {
    this.observableService.getNumber().subscribe({
      next: (data) => {
        this.items.push(data);
      },
    });
  }
}
