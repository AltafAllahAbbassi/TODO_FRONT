import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Person } from 'src/app/models/person';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  persons:Person[]=[]
  selectPersoenSubject= new Subject<Person>()
  constructor(private http:HttpClient) {
    this.persons=[
      new Person(1,"ABBASSI","Altaf Allah","aaa.jpg",21),
      new Person(2,"ABBASSI","Mohamed Ayoub","ayoub.jpg",23)

    ]
  }
  getFPersons(){
    return this.persons;
  }
  getPersons():Observable<Person[]>{
    return this.http.get<Person[]>('https://immense-citadel-91115.herokuapp.com/api/personnes');

  }
  selectPerson(person:Person){
    this.selectPersoenSubject.next(person)

  }
}
