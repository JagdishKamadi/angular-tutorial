import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ObservableService } from '../../service/observable-service';

@Component({
  selector: 'my-first-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent implements OnInit {
  users$!: Observable<any[]>;
  constructor(private observableService: ObservableService) {}

  ngOnInit(): void {
    this.users$ = this.observableService.getUsers();
  }
}
