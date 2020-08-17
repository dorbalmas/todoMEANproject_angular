import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MongolistService {
  url = 'https://tibatodosproject.herokuapp.com/tasks';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.url);
  }
  getSearchedData(_searchProp) {
    this.url = `https://tibatodosproject.herokuapp.com/tasks/SearchTodo/?q=${_searchProp}`;
    return this.http.get(this.url);
  }
  addTodo(_obj) {
    console.warn(_obj);
    this.url = 'https://tibatodosproject.herokuapp.com/tasks/AddTodo';
    return this.http.post(this.url, _obj);
  }
  removeTodo(_obj) {
    this.url = 'https://tibatodosproject.herokuapp.com/tasks/RemoveTodo';
    return this.http.post(this.url, _obj);
  }
  editTodoObj(_obj) {
    this.url = 'https://tibatodosproject.herokuapp.com/tasks/EditTodo';
    return this.http.post(this.url, _obj);
  }
}
