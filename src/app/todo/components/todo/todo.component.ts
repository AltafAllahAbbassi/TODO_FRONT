import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[]=[]

  todo:Todo=new Todo()
  constructor(private service:TodoServiceService) { }

  ngOnInit(): void {
    this.todos=this.service.getTodos();
  }

  addTodo(){
    this.service.addTodo(this.todo)
    this.todo=new Todo()

  }
  deleteTodo(){
    this.service.deleteTodo(this.todo)
  }
}
