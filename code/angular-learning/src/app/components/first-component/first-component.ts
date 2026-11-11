import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ObservableService } from '../../service/observable-service';

@Component({
  selector: 'my-first-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent implements OnInit {
  users = signal<any[]>([]);
  constructor(private observableService: ObservableService) {}

  ngOnInit(): void {
    this.observableService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
      },
    });
  }
}
