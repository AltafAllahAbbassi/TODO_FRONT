import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { HightlightDirective } from './directives/hightlight.directive';
import { TestDirectiveComponent } from './directives/test-directive/test-directive.component';
import { RaimbowDirective } from './directives/raimbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    HightlightDirective,
    TestDirectiveComponent,
    RaimbowDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
