import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { Todo } from '../models'

export type ChangeTodoTitleEvent = { oldTodo: Todo; newTodo: Todo }

@Component({
  selector: 'app-item',
  template: `
    <span
      class="todo-title"
      [hidden]="editing"
      (click)="editItem()"
    >
      {{todo.title}}
    </span>
    <app-input
      *ngIf="editing"
      [editMode]="true"
      [todoText]="todo.title"
      (addTodo)="changeItemTitle($event)"
      (cancel)="cancelEdit()"
    ></app-input>
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
  @Output() changeTitle = new EventEmitter<ChangeTodoTitleEvent>()

  editing = false

  editItem(todoInpunt: HTMLElement) {
    this.editing = true
  }
  cancelEdit() {
    this.editing = false
  }

  removeItem() {
    this.remove.emit(this.todo)
  }

  changeItemTitle(newTitle: string) {
    this.editing = false
    this.changeTitle.emit({
      oldTodo: this.todo,
      newTodo: { title: newTitle },
    })
  }
}
