import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormOneComponent } from './components/form-one/form-one.component';
import { HeaderComponent } from './components/header/header.component';
import { FormTwoComponent } from './components/form-two/form-two.component';
import { FormThreeComponent } from './components/form-three/form-three.component';

@NgModule({
  declarations: [
    AppComponent,
    FormOneComponent,
    HeaderComponent,
    FormTwoComponent,
    FormThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
