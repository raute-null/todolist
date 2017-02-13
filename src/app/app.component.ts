import { Component } from '@angular/core';

import { TodoItem } from './todo-item';

@Component({
  selector: 'todolist-app',
  template:`
    <div id="titleBar">
        <img src="./img/icon.png" height="24" />
        <span id="appTitle">TodoList</span>
    </div>
    <div id="content">
        <div id="newItemInputWrapper">
            <input #newItemText id="newItemInput" placeholder="Enter new todo item..."
                (keyup.enter)="addItem(newItemText.value); newItemText.value = '';" />
            <button (click)="addItem(newItemText.value); newItemText.value = ''; newItemText.focus()"
                title="Click to add the entered todo item">Add</button>
        </div>
        <div id="todoListWrapper">
            <ul id="todoList">
              <li class="todoListItem" *ngFor="let todoItem of todoItems.slice().reverse()"
                [class.done]="todoItem.done === true"
                [id]="todoItem.id">
                <input type="checkbox" class="todoItemDoneTrigger" [(ngModel)]="todoItem.done"
                 [attr.title]="todoItem.done ? 'Mark item as undone' : 'Mark item as done'"
                />
                <span class="todoItemText">{{todoItem.name}}</span>
                <img src="./img/delete.png" height="20" class="todoItemDelete" (click)="onDelete(todoItem)"
                 title="Delete this todo item" />
              </li>
            </ul>
        </div>
    </div>
  `
})

export class AppComponent  {
  title = 'TodoList';
  todoItems: TodoItem[] = [];

  /**
   * Deletes the given todo item from the list.
   *
   * @param selectedTodoItem the selected todo item to be deleted
   */
  onDelete(selectedTodoItem: TodoItem): void {
    var index = this.todoItems.indexOf(selectedTodoItem, 0);
    if (index > -1) {
      this.todoItems.splice(index, 1);
    }
  }

  /**
   * Adds the item with the given text to the list of todo items.
   *
   * @param text the name for the todo item to be added
   */
  addItem(text: string) {
    if (text) {
        let newItem = new TodoItem();
        newItem.name = text;
        newItem.done = false;
        newItem.id = this.findNextFreeId();
        this.todoItems.push(newItem);
    }
  }

  /**
   * Returns the next free ID value.
   *
   * @return the next unused ID value
   */
  findNextFreeId(): number {
    if (this.todoItems.length === 0) {
        return 0;
    }
    let latestItem = this.todoItems.slice(-1)[0];
    let latestItemId = latestItem.id;
    return ++latestItemId;
  }

}




