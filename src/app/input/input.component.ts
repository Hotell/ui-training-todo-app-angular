import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-input',
  template: `
    <form (submit)="handleSubmit($event)">
      <input
        [value]="todoText"
        (input)="todoText=$event.target.value"
        (keyup.esc)="todoText=''"
      >
      <button class="btn" type="submit">Add Todo</button>
    </form>
  `,
  styles: [
    `
    input {
      padding: 4px 10px 4px;
      font-size: 16px;
      font-family: 'Lucida Grande', Verdana, sans-serif;
      line-height: 20px;
      border: solid 1px #dddddd;
      border-radius: 5px;
      flex-grow: 1;
    }

    :host(:not([hidden])){
      display: block;
    }
    :host form {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
    }
    `,
  ],
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
