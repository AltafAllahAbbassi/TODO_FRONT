import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  embauches:Person[]
  constructor(private embaucheService:EmbaucheService) { }

  ngOnInit(): void {
    this.embauches=this.embaucheService.getEmbauches()
  }

}
