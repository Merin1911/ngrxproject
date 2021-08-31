import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { Store } from '@ngrx/store';
import { TodoAdd, TodoUpdate } from 'src/app/actions/todo-actions';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {

  constructor(private store: Store<{todos: Todo[]}>) { }

  addTodo(todo: string){
    const newTodo = new Todo();
    newTodo.title = todo;
    this.store.dispatch(new TodoAdd(newTodo));
  }

  updateTodo(){
    const newTodo = new Todo();
    newTodo.title = 'Todo updte';
    const newData = {index: 1,data:newTodo};
    this.store.dispatch(new TodoUpdate(newData));
  }
  ngOnInit() {}

}
