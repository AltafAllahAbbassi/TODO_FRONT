import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

@Input()
person:Person
@Output()
selectedPerson=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  handlePersonClick(){
    this.selectedPerson.emit(this.person)
  }


}
