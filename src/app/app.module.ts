import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {SaludarComponent } from './componentes/saludar.component';

@NgModule({
  declarations: [
    //aqui se declaran los componentes 
    //que se van a usar para todo el proyecto
    AppComponent,
    SaludarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
