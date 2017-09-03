import { TodoListService } from './todo-list.service'
import { Component, OnInit } from '@angular/core'
import { Todo } from './models'
import { ChangeTodoTitleEvent } from './item/item.component'

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    <app-input (addTodo)="handleTodoAdd($event)"></app-input>
    <ul>
      <li *ngFor="let todo of todoItems">
        <app-item [todo]="todo" (remove)="handleTodoRemoval($event)"  (changeTitle)="handleTodoChange($event)"></app-item>
      </li>
    </ul>
  `,
  styles: [
    `
  :host {
    display: block;
    position: relative;
    width: 400px;
    padding: 30px 30px 15px;
    background: white;
    border: 1px solid;
    border-color: #dfdcdc #d9d6d6 #ccc;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
  }

  :host:before, :host:after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 4px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 2px;
  }

  :host:after {
    bottom: -3px;
    left: 0;
    right: 0;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  :host:before {
    bottom: -5px;
    left: 2px;
    right: 2px;
    border-color: #c4c4c4;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }

  :host h1 {
    font-size: 52px;
    line-height: 52px;
    margin-bottom: 30px;
    font-weight: bold;
    text-align: center;
    letter-spacing: -0.8px;
  }

  app-input {
    margin-bottom: 20px;
  }
  `,
  ],
})
export class AppComponent implements OnInit {
  title = 'My Todos'

  todoItems: ReadonlyArray<Todo>
  constructor(private todoList: TodoListService) {}

  ngOnInit() {
    this.todoItems = this.todoList.getTodoList()
  }

  handleTodoAdd(todoText: string) {
    this.todoItems = this.todoList.addItem(todoText)
  }
  handleTodoRemoval(todo: Todo) {
    this.todoItems = this.todoList.removeItem(todo)
  }
  handleTodoChange(args: ChangeTodoTitleEvent) {
    this.todoItems = this.todoList.changeItem(args)
  }
}
