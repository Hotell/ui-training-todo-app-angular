import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-input',
  template: `
    <form (submit)="handleSubmit($event)">
      <input [value]="todoText" (input)="todoText=$event.target.value">
      <button type="submit">Add Todo</button>
    </form>
  `,
  styles: [],
})
export class InputComponent {
  @Output() addTodo = new EventEmitter<string>()
  todoText = ''

  createTodoText(todoText: string) {
    this.addTodo.emit(todoText)
    this.todoText = ''
  }
  handleSubmit(event: KeyboardEvent) {
    event.preventDefault()
    this.createTodoText(this.todoText)
  }
}
