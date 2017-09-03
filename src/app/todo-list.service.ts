import { Injectable } from '@angular/core'
import { Todo } from './models'
import { ChangeTodoTitleEvent } from './item/item.component'

@Injectable()
export class TodoListService {
  private todoList: ReadonlyArray<Todo> = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create new app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ]

  getTodoList() {
    return this.todoList
  }

  addItem(todoText: string) {
    const newTodoItem = {
      title: todoText,
    }
    const newTodoList = [...this.todoList, newTodoItem]
    this.todoList = newTodoList
    return this.todoList
  }

  removeItem(todo: Todo) {
    this.todoList = this.todoList.filter(todoItem => todoItem !== todo)
    return this.todoList
  }

  changeItem({ oldTodo, newTodo }: ChangeTodoTitleEvent) {
    const idx = this.todoList.findIndex(todoItem => todoItem === oldTodo)
    const newTodoList = [...this.todoList.slice(0, idx), newTodo, ...this.todoList.slice(idx + 1)]
    this.todoList = newTodoList
    return this.todoList
  }
}
