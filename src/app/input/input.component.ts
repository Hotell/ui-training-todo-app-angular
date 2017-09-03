import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-input',
  template: `
    <form (submit)="handleSubmit($event)">
      <input
        #inputElement
        [value]="todoText"
        (input)="todoText=$event.target.value"
        (blur)="handleCancelEdit()"
        (keyup.esc)="$event.target.blur()"
      >
      <button [hidden]="editMode" class="btn" type="submit">Add Todo</button>
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
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    tabindex: '0',
  },
})
export class InputComponent implements AfterViewInit {
  @Input() todoText = ''
  @Input() editMode = false
  @Output() addTodo = new EventEmitter<string>()
  @Output() cancel = new EventEmitter<void>()

  @ViewChild('inputElement') private inputElement: ElementRef

  ngAfterViewInit() {
    this.inputElement.nativeElement.focus()
  }

  createTodoText(todoText: string) {
    this.addTodo.emit(todoText)
    this.todoText = ''
  }
  handleSubmit(event: KeyboardEvent) {
    event.preventDefault()
    this.createTodoText(this.todoText)
  }
  handleCancelEdit() {
    this.cancel.emit()
  }
}
