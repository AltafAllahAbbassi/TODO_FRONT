import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  color;
  defaultColor = 'red';
  constructor() {
    this.color = this.defaultColor;
  }
  ngOnInit(): void {}

  changeDivColor(inputColor) {
    this.color = inputColor;
  }
  resetDivColor() {
    this.color = this.defaultColor;
  }
}
