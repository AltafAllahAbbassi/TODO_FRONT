import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private embaucheService:EmbaucheService,
               private cvService:CvService,
               private router:Router
               ) { }

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
    alert(this.person.firstname + " is already embauched")

  }
  details(){
    this.router.navigate(['cv', this.person.id])

  }
}
