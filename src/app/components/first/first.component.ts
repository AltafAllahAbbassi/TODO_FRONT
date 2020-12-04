import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  isHidden= false;
  color ='yellow'
  name = 'altaf';
  sayHello(){
    alert("hello")

  }
  hideShow(){
    this.isHidden=!this.isHidden
  }
  ngOnInit(): void {
  }

}
