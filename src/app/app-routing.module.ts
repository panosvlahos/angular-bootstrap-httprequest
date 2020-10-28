import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditComponent } from './edit.component';
const routes:Routes=[
  { path: 'first-component', component: AppComponent },
  { path: 'second-component/root/:id', component: EditComponent }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
  AppComponent,
  EditComponent
]