import { Injectable } from '@angular/core';
import { Person } from '../../../models/person';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  embauches: Person[];
  constructor() {
    this.embauches = [];
  }
  getEmbauches() {
    console.log(this.embauches);
    return this.embauches;
  }
  addEmbauche(person: Person) {
    const index = this.embauches.indexOf(person);
    if (index >= 0) {
      return 0;
    } else {
      this.embauches.push(person);
      return 1;
    }
  }
}
