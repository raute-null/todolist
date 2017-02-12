"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TODO_ITEMS = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'TodoList';
        this.todoItems = TODO_ITEMS;
    }
    AppComponent.prototype.onSetDone = function (todoItem) {
        todoItem.done = !todoItem.done;
    };
    AppComponent.prototype.onDelete = function (todoItem) {
        // TODO
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todolist-app',
            template: "\n    <ul id=\"todoList\">\n      <li class=\"todoListItem\" *ngFor=\"let todoItem of todoItems\"\n        [class.done]=\"todoItem.done === true\">\n        <input type=\"checkbox\" class=\"todoItemDoneTrigger\" [(ngModel)]=\"todoItem.done\" />\n        <span class=\"todoItemText\">{{todoItem.name}}</span>\n        <img src=\"./img/delete.png\" height=\"20\" class=\"todoItemDelete\" (click)=\"onDelete(todoItem)\" />\n      </li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map