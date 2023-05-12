import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsComponent } from './components/components.component';
import { ServicesComponent } from './services/services.component';
import { CardComponent } from './components/card/card.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ServicesComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
