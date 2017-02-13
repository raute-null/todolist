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
var todo_item_1 = require('./todo-item');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'TodoList';
        this.todoItems = [];
    }
    /**
     * Deletes the given todo item from the list.
     *
     * @param selectedTodoItem the selected todo item to be deleted
     */
    AppComponent.prototype.onDelete = function (selectedTodoItem) {
        var index = this.todoItems.indexOf(selectedTodoItem, 0);
        if (index > -1) {
            this.todoItems.splice(index, 1);
        }
    };
    /**
     * Adds the item with the given text to the list of todo items.
     *
     * @param text the name for the todo item to be added
     */
    AppComponent.prototype.addItem = function (text) {
        if (text) {
            var newItem = new todo_item_1.TodoItem();
            newItem.name = text;
            newItem.done = false;
            newItem.id = this.findNextFreeId();
            this.todoItems.push(newItem);
        }
    };
    /**
     * Returns the next free ID value.
     *
     * @return the next unused ID value
     */
    AppComponent.prototype.findNextFreeId = function () {
        if (this.todoItems.length === 0) {
            return 0;
        }
        var latestItem = this.todoItems.slice(-1)[0];
        var latestItemId = latestItem.id;
        return ++latestItemId;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todolist-app',
            template: "\n    <div id=\"titleBar\">\n        <img src=\"./img/icon.png\" height=\"24\" />\n        <span id=\"appTitle\">TodoList</span>\n    </div>\n    <div id=\"content\">\n        <div id=\"newItemInputWrapper\">\n            <input #newItemText id=\"newItemInput\" placeholder=\"Enter new todo item...\"\n                (keyup.enter)=\"addItem(newItemText.value); newItemText.value = '';\" />\n            <button (click)=\"addItem(newItemText.value); newItemText.value = ''; newItemText.focus()\"\n                title=\"Click to add the entered todo item\">Add</button>\n        </div>\n        <div id=\"todoListWrapper\">\n            <ul id=\"todoList\">\n              <li class=\"todoListItem\" *ngFor=\"let todoItem of todoItems.slice().reverse()\"\n                [class.done]=\"todoItem.done === true\"\n                [id]=\"todoItem.id\">\n                <input type=\"checkbox\" class=\"todoItemDoneTrigger\" [(ngModel)]=\"todoItem.done\"\n                 [attr.title]=\"todoItem.done ? 'Mark item as undone' : 'Mark item as done'\"\n                />\n                <span class=\"todoItemText\">{{todoItem.name}}</span>\n                <img src=\"./img/delete.png\" height=\"20\" class=\"todoItemDelete\" (click)=\"onDelete(todoItem)\"\n                 title=\"Delete this todo item\" />\n              </li>\n            </ul>\n        </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map