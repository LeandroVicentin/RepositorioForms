import { FormThreeComponent } from './components/form-three/form-three.component';
import { FormTwoComponent } from './components/form-two/form-two.component';
import { FormOneComponent } from './components/form-one/form-one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', component : HeaderComponent},
  { path: 'form', component : FormOneComponent},
  { path: 'form2', component : FormTwoComponent},
  { path: 'form3', component : FormThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
