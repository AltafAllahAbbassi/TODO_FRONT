import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  constructor() { }
  size=100
  color='black'
  family='garamand'
  align='left'


  ngOnInit(): void {
  }
  changeAlign(align:string){
    this.align=align;
  }

}
