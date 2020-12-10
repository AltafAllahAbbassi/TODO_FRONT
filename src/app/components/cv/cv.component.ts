import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

 // catchedPerson=new Person(1,"ABBASSI","Altaf Allah","aaa.jpg",21)
  constructor() { }

  ngOnInit(): void {

  }
  /*catchPerson(person:Person){
    this.catchedPerson=person
  }
*/
}
