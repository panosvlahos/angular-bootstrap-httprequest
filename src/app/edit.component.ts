import { Component,EventEmitter,OnInit, Input } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {user}from "./model/user.model"
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Body } from '@angular/http/src/body';
import {Location} from '@angular/common';
//import { threadId } from 'webworker';

@Component({
  selector: 'edit-root',
  templateUrl: './edit.basic.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
    //var user;
    items=new user();
    public id = {  
        _id: ""  
       }; 
    active=false;
     obj=new user();
     app=new user
     Userdata=[];
    constructor(private route:ActivatedRoute,private http: HttpClient,private _location:Location){}
    // addEventListener('message', ({ data }) => {
    //   const response = `worker response to ${data}`;
    //   postMessage(response);
    // });
   
    
ngOnInit()
{
  if (typeof Worker !== 'undefined') {
    // Create a new
    const worker = new Worker('./edit.component.ts.worker', { type: 'module' });
    worker.onmessage = ({ data }) => {
      console.log(`page got message: ${data}`);
    };
    worker.postMessage('hello');
  } 
    console.log('asdasd');
    
    
     this.id._id = this.route.snapshot.paramMap.get('id'); 
    

    console.log(this.id._id);
  
  
  const body = {  };
  const headerDict = {
    'api-token': '3115bb90-923d-4242-a8c3-23b3a3a15205' 
  }
  
   var items=[];
  const requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(headerDict), 
  };
  this.http.get<any>('http://lab.localhost.com/user/'+this.id._id,  requestOptions ).toPromise().then(data => {
    
    this.items=data.data;
    console.log(this.items.apps);
    
  });
 

}
onSubmit(item)
{
  console.log(item);
  console.log(this.items);
}
onEdit(items)
{
  
  console.log(items);
  
  
  const body={name:items.name,
    birthday:items.birthday,
    country:items.country
  };
  
  
let headers = new HttpHeaders();
headers = headers.set('api-token', '3115bb90-923d-4242-a8c3-23b3a3a15205');
 
  this.http.put<any>('http://lab.localhost.com/user/'+this.id._id, body, {
    headers: headers
    }).subscribe(data => {
      console.log(data.data);
      console.log(body);
    this.items=data.data;
 
        });
}
onRemove(item,i)
{
  this.items.apps.splice(i,1);
  
}

onEditApp(items,i)
{

  console.log(items);
  
  
  
  const bodyapp={app:items.apps[i].name
  };
  console.log(items.apps[i].name);
let headers = new HttpHeaders();
headers = headers.set('api-token', '3115bb90-923d-4242-a8c3-23b3a3a15205');
  this.http.put<any>('http://lab.localhost.com/user/'+this.id._id+'/app/'+items.apps[i]._id, bodyapp, {
    headers: headers
    }).subscribe(data => {
      console.log(data);
      console.log(bodyapp);
    this.items=data.data;
  
        });
}
  

  onBack()
  {
 
    this._location.back();
  }

}