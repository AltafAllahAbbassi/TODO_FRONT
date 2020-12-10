import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/cv/service/cv.service';
import { Person } from 'src/app/models/person';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

 // catchedPerson=new Person(1,"ABBASSI","Altaf Allah","aaa.jpg",21)
 nbSelected=0;
  constructor( private cvService:CvService) { }

  ngOnInit(): void {
    this.cvService.selectPersoenSubject
    .pipe(
      distinctUntilChanged()
    )
    .subscribe(
      (person)=>this.nbSelected++
      )

  }
  /*catchPerson(person:Person){
    this.catchedPerson=person
  }
*/
}
