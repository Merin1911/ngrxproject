import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import {  TodoRemove } from 'src/app/actions/todo-actions';
import { select,Store } from '@ngrx/store';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  constructor(private store: Store<{todos: Todo[]}>) {
    store.pipe(select('todos')).subscribe(values => {
      console.log(values);
      this.todos = values;
    });
   }
   removeTodo(index: number){
      this.store.dispatch(new TodoRemove(index));
   }
  ngOnInit() {}

}
