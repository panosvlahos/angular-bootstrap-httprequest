import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes}from '@angular/router'
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './edit.component';
import { EditService } from './edit.service';
import { CommonModule } from '@angular/common';
import {  FormsModule} from '@angular/forms';

 const routes:Routes=[
  { path: 'first-component', component: AppComponent },
  { path: 'second-component/root', component: EditComponent }

 ];

// {path:'',EditComponent}
 
// ]
@NgModule({
  declarations: [
    AppComponent
    ,routingComponents
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export const routingComponents =[
//   AppComponent,
//   EditComponent
// ]
