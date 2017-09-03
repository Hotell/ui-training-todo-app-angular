import { TodoListService } from './todo-list.service'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { InputComponent } from './input/input.component'
import { ItemComponent } from './item/item.component'

@NgModule({
  declarations: [AppComponent, InputComponent, ItemComponent],
  imports: [BrowserModule],
  providers: [TodoListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
