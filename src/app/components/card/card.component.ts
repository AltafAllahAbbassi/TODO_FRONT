import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  name="abbassi"
  firstName="altaf allah"
  age=21
  path ="aaa.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
