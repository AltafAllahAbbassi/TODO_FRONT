import { Component, Input, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { CvService } from 'src/app/cv/service/cv.service';
import { EmbaucheService } from 'src/app/embauche/components/services/embauche.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input()
person:Person
  constructor(private embaucheService:EmbaucheService,private cvService:CvService) { }

  ngOnInit(): void {
    this.person=null
    this.cvService.selectPersoenSubject
    .pipe(
      distinctUntilChanged()
    )
    .subscribe(
      (person)=>this.person=person
    )
  }

  embaucher(){
    if(!this.embaucheService.addEmbauche(this.person))
    alert(this.person.firstName + " is already embauched")

  }
}
