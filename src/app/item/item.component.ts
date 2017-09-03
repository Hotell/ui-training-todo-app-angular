import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { Todo } from '../models'

@Component({
  selector: 'app-item',
  template: `
    <span class="todo-title">{{todo.title}}</span>
    <button class="btn" (click)="removeItem()">
      remove
    </button>
  `,
  styles: [
    `
  :host {
    padding: 10px 0;
    border-top: solid 1px #ddd;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
  }
  .todo-title {
    flex-grow: 1;
    padding-left: 11px;
  }
  button {
    background: red;
  }
  button:hover {
    background: darkred;
  }
  `,
  ],
})
export class ItemComponent {
  @Input() todo: Todo
  @Output() remove = new EventEmitter<Todo>()

  removeItem() {
    this.remove.emit(this.todo)
  }
}
