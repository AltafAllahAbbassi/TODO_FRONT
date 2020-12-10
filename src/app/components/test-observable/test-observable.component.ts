import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
    const observable=new Observable(
      (observer)=>{
        let i=5;
        setInterval(()=>{
          if(!i){
            observer.complete()
          }
          i--
          observer.next(i)
        },1000)
      }
    )
    observable.subscribe(
      (val)=>console.log(val),
      ()=>{},
      ()=>console.log("flux de donnees est termine")
    )
  }


}
