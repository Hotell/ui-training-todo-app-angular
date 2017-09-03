import { Component } from '@angular/core'

interface Todo {
  title: string
}

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
    <app-input (addTodo)="handleTodoAdd($event)"></app-input>
    <ul>
      <li *ngFor="let todo of todoList">
        {{todo.title}}
        <button (click)="removeTodo(todo)">X</button>
      </li>
    </ul>
  `,
  styles: [],
})
export class AppComponent {
  title = 'TodoList App'
  todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ]

  handleTodoAdd(todoText: string) {
    const newTodoItem = {
      title: todoText,
    }
    const newTodoList = [...this.todoList, newTodoItem]
    this.todoList = newTodoList
  }
  removeTodo(todo: Todo) {
    this.todoList = this.todoList.filter(todoItem => todoItem !== todo)
  }
}
