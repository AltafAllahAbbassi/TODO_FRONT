import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CvService } from 'src/app/cv/service/cv.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private cvService:CvService) { }
  persons: Person[]
  @Output()
  forwardSelectPerson=new EventEmitter()


  ngOnInit(): void {
  //  this.persons=this.cvService.getPersons()
  this.cvService.getPersons().subscribe(
    (data)=>this.persons=data,
    (error)=>this.persons=this.cvService.getFPersons()
  )
  }
  /*forwardPerson(person){
    this.forwardSelectPerson.emit(person)

  }*/


}
