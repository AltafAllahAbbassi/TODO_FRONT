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
    this.persons=this.cvService.getPersons()
  }
  forwardPerson(person){
    this.forwardSelectPerson.emit(person)

  }


}
