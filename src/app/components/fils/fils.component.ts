import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  name='fils'
  @Input()
  color='blue'
  @Output()
  sendDataToDad= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    this.sendDataToDad.emit(
      this.color
    )
  }

}
