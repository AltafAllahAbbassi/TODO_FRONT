import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { TwoComponent } from './components/two/two.component';
import { CardComponent } from './components/card/card.component';
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { WordComponent } from './directives/word/word.component';
import { HightlightDirective } from './directives/hightlight.directive';
import { TestDirectiveComponent } from './directives/test-directive/test-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    TwoComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    NgStyleComponent,
    WordComponent,
    HightlightDirective,
    TestDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
