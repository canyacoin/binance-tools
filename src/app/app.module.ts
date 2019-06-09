import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
