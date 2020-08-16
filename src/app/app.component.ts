import { Component, OnInit } from '@angular/core';
import { MongolistService } from './mongolist.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'todos';
  taskArr: any = [];
  tempTask;
  constructor(private listOfTasks: MongolistService) {}

  ngOnInit() {
    this.listOfTasks.getData().subscribe((data) => {
      this.taskArr = data;
    });
  }
  search(_searchInput) {
    this.listOfTasks.getSearchedData(_searchInput).subscribe((data) => {
      this.taskArr = data;
    });
  }
  addTask(_obj) {
    console.warn(this.taskArr);
    console.warn(_obj);
    this.listOfTasks.addTodo(_obj).subscribe((data) => {
      this.taskArr.push(data);
    });
  }
  removeTask(_obj) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        this.listOfTasks.removeTodo(_obj).subscribe((data) => {
          this.taskArr = this.taskArr.filter((item) => item._id != _obj._id);
        });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  editTodo = async (_obj) => {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputValue: _obj.name,
      inputPlaceholder: 'Type your Task here...',
      inputAttributes: {
        'aria-label': 'Type your message here',
      },
      showCancelButton: true,
    });
    const { value: category } = await Swal.fire({
      input: 'select',
      inputValue: _obj.category,
      inputPlaceholder: 'category:',
      inputOptions: {
        homework: 'homework',
        meals: 'meals',
        workout: 'workout',
        classes: 'classes',
        meeting: 'meeting',
        calls: 'calls',
        random: 'random...',
      },
      showCancelButton: true,
    });

    if (text || category) {
      this.taskArr.map((item) => {
        if (item._id == _obj._id) {
          _obj.name = text;
          _obj.category = category;
          _obj.date = item.date;
          console.warn(_obj.date);
        }
      });
      console.warn(_obj);
      this.listOfTasks.editTodoObj(_obj).subscribe((data) => {
        this.taskArr = data;
      });
    }
  };

  sortBy(array, prop) {
    console.log(typeof array[0][prop]);
    if (typeof array[0][prop] == 'string') {
      array.sort((a, b) => a[prop].localeCompare(b[prop]));
    } else if (typeof array[0][prop] == 'number') {
      array.sort((a, b) => parseFloat(a[prop]) - parseFloat(b[prop]));
    }
  }

  sortTaskListABC(_type) {
    this.sortBy(this.taskArr, _type);
    console.warn(_type);
  }
}
