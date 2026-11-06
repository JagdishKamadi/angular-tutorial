import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-first-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {
  messageForParent: string = 'Hello Parent bhai!';
  @Output() notify = new EventEmitter();
  emitMessageToParent() {
    this.notify.emit(this.messageForParent);
  }
}
