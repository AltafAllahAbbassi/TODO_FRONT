import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CvComponent } from './components/cv/cv.component';
import {HeaderComponent} from './components/header/header.component'
import { EmbaucheComponent } from "./embauche/components/embauche/embauche.component";


import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { WordComponent } from './directives/word/word.component';
import { HightlightDirective } from './directives/hightlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    ListItemComponent,
    CvComponent,
    HeaderComponent,
    EmbaucheComponent,

    NgStyleComponent,
    WordComponent,
    HightlightDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
