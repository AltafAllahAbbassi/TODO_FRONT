import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',//le nom de la balise qui represente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';
  constructor(private logger:LoggerService){
    this.logger.logger("je suis le app componenet")
  }
}
