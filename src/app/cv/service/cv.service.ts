import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Person } from 'src/app/models/person';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  persons:Person[]=[]
  selectPersoenSubject= new Subject<Person>()
  constructor(private http:HttpClient) {
    this.persons=[
      new Person(1,"ABBASSI","Altaf Allah","aaa.jpg",21,13472210,'engineer'),
      new Person(2,"ABBASSI","Mohamed Ayoub","ayoub.jpg",23,13472210,"business man")

    ]
  }
  getFPersons(){
    return this.persons;
  }
  getPersons():Observable<Person[]>{
    return this.http.get<Person[]>(environment.api+'personnes');

  }
  selectPerson(person:Person){
    this.selectPersoenSubject.next(person)

  }
  getPersonneById(id:number):Observable<Person>{
    return this.http.get<Person>(environment.api+'personnes/'+id)
  }
  deletePersonneById(id:number){
    const token = localStorage.getItem('token')
    //const params= new HttpParams().set('access_token',token)
    //return this.http.delete(environment.api+'personnes/'+id,{params})
    const headers = new HttpHeaders().set('Authorization',token)
    return this.http.delete(environment.api+'personnes/'+id,{headers})
  }

}
