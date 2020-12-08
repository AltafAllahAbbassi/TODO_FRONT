import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  persons: Person[]
  @Output()
  forwardSelectPerson=new EventEmitter()


  ngOnInit(): void {
    this.persons=[
      new Person(1,"ABBASSI","Altaf Allah","",21),
      new Person(2,"ABBASSI","Mohamed Ayoub","ayoub.jpg",23)

    ]
  }
  forwardPerson(person){
    this.forwardSelectPerson.emit(person)

  }


}
