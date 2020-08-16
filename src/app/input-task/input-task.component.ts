import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.css'],
})
export class InputTaskComponent {
  @Output() search: EventEmitter<any> = new EventEmitter();
  @Output() addTask: EventEmitter<any> = new EventEmitter();
  @Output() sortTaskListABC: EventEmitter<any> = new EventEmitter();

  constructor() {}

  addObject(_obj) {
    let date = new Date();
    let myObject = {
      name: _obj.name,
      category: _obj.category,
      date:
        (date.getMonth() > 8
          ? date.getMonth() + 1
          : '0' + (date.getMonth() + 1)) +
        '/' +
        (date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
        '/' +
        date.getFullYear(),
    };
    this.addTask.emit(myObject);
  }
  searchValue(_inputValue) {
    console.warn(_inputValue);
    this.search.emit(_inputValue);
  }
  sortListByType(_type) {
    this.sortTaskListABC.emit(_type);
  }
}
