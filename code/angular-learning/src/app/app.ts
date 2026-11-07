import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  parentMessage: string = '';
  outputMessage(data: string) {
    this.parentMessage = data;
  }
}
