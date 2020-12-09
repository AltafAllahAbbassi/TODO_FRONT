import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todos:Todo[]=[]

  constructor() { }
  getTodos(){
    return this.todos;
  }
  addTodo(todo:Todo){
    if(this.todos.length)
    todo.id=this.todos[this.todos.length-1].id+1
    else todo.id=0
    this.todos.push(todo)
  }
  deleteTodo(todo:Todo){
    const index=this.todos.indexOf(todo)
    this.todos.splice(index,1)

  }
}
