import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from 'src/app/cv/service/cv.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  person: Person=null
  constructor(
    private activaredRoute:ActivatedRoute,
    private cvService:CvService,
    private router:Router,
    private tostrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.activaredRoute.params.subscribe(
      (params)=>{
        this.cvService.getPersonneById(+params.id).subscribe(
          (person)=>this.person=person,
          (error)=>{
            this.tostrService.error("Personne inexistanre")
            this.router.navigate['cv']
          }
        )
      }
    )
  }

  deletePerson(id:number){
    this.cvService.deletePersonneById(id).subscribe(
      (data)=>{
        this.tostrService.success(`${this.person.firstname} ${this.person.name} is deleted successfully`)
        this.router.navigate(['cv'])
      },
      (error)=>this.tostrService.error(`${this.person.firstname} ${this.person.name} can't be deleted`)

    )

  }

}
