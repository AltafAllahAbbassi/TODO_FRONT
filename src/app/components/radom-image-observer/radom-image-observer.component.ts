import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-radom-image-observer',
  templateUrl: './radom-image-observer.component.html',
  styleUrls: ['./radom-image-observer.component.css'],
})
export class RadomImageObserverComponent implements OnInit {
  constructor() {}

  images = ['aaa.jpg', 'ayoub.jpg', 'flower.jpeg', 'rotating_card_thumb2.png'];
  observable: Observable<String>;
  ngOnInit(): void {
    this.observable = new Observable((observer) => {
      let index = -1;
      setInterval(
        () => {
          index ++;
          observer.next(this.images[(index)%this.images.length])
        },

        1000
      );
    });


  }
}
