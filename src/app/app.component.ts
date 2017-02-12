import { Component } from '@angular/core';

import { TodoItem } from './todo-item';

const TODO_ITEMS: TodoItem[] = [
  { id: 1, name: 'Buy milk', done: false },
  { id: 2, name: 'Mow the lawn', done: false },
  { id: 3, name: 'Check mails', done: false },
  { id: 4, name: 'Grocery shopping', done: true },
  { id: 5, name: 'Write a letter', done: false },
  { id: 6, name: 'Go fishing', done: false },
  { id: 7, name: 'Paint the house', done: false },
  { id: 8, name: 'Clean the kitchen', done: true },
  { id: 9, name: 'Walk the dog', done: false },
  { id: 10, name: 'Eat something healthy', done: false }
];


@Component({
  selector: 'todolist-app',
  template:`
    <ul id="todoList">
      <li class="todoListItem" *ngFor="let todoItem of todoItems"
        [class.done]="todoItem.done === true">
        <input type="checkbox" class="todoItemDoneTrigger" [(ngModel)]="todoItem.done" />
        <span class="todoItemText">{{todoItem.name}}</span>
        <img src="./img/delete.png" height="20" class="todoItemDelete" (click)="onDelete(todoItem)" />
      </li>
    </ul>
  `
})

export class AppComponent  {
  title = 'TodoList';
  todoItems = TODO_ITEMS;

  onSetDone(todoItem: TodoItem): void {
    todoItem.done = !todoItem.done;
  }

  onDelete(todoItem: TodoItem): void {
    // TODO
  }

}




