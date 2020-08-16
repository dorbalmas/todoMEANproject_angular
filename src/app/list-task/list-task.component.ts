import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent {
  @Input() taskArr;
  @Output() removeTask: EventEmitter<any> = new EventEmitter();
  @Output() editTodo: EventEmitter<any> = new EventEmitter();
  constructor() {}

  deleteTask(_obj) {
    this.removeTask.emit(_obj);
  }
  editTask(_obj) {
    this.editTodo.emit(_obj);
  }
}
