import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MongolistService {
  url = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.url);
  }
  getSearchedData(_searchProp) {
    this.url = `http://localhost:3000/tasks/SearchTodo/?q=${_searchProp}`;
    return this.http.get(this.url);
  }
  addTodo(_obj) {
    console.warn(_obj);
    this.url = 'http://localhost:3000/tasks/AddTodo';
    return this.http.post(this.url, _obj);
  }
  removeTodo(_obj) {
    this.url = 'http://localhost:3000/tasks/RemoveTodo';
    return this.http.post(this.url, _obj);
  }
  editTodoObj(_obj) {
    this.url = 'http://localhost:3000/tasks/EditTodo';
    return this.http.post(this.url, _obj);
  }
}
