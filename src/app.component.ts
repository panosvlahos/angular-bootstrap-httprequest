import { Component,OnInit,Output ,EventEmitter } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {user}from "./model/user.model"
import { EditService } from './edit.service';
import { Router } from '@angular/router';


// class Model {
//   _id: string;
//   name:string;
//   birthday:string;
//   country:string;
  
// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-angular';
  active=true;
 
 @Output() tableDataValues=new EventEmitter<string>();
showModal=false;

  items=new user();
 constructor(private http: HttpClient,
  private service:EditService,
  private router:Router){
 const body = {  };
  const headerDict = {
    'api-token': '3115bb90-923d-4242-a8c3-23b3a3a15205' 
  }
  
   var items=[];
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  this.http.get<any>('http://lab.localhost.com/user/',  requestOptions ).toPromise().then(data => {
    this.items=data.data;
  });
  
 }
  open(item:user) {

  this.router.navigate(['/second-component/root',item._id]);
 }
 
ngOnInit()
{

}



}