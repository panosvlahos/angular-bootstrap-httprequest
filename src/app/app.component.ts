import { Component,OnInit,Output,ViewChild ,EventEmitter } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {user}from "./model/user.model"
import { EditService } from './edit.service';
import { Router } from '@angular/router';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { employees } from './employees';
import { images } from './images';
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
 onButtonClick() {
  this.title = 'Hello from Kendo UI!';
}


@ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
public gridData: any[] = employees;
public gridView: any[];

public mySelection: string[] = [];

public ngOnInit(): void {
    this.gridView = this.gridData;
}

public onFilter(inputValue: string): void {
    this.gridView = process(this.gridData, {
        filter: {
            logic: "or",
            filters: [
                {
                    field: 'full_name',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'job_title',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'budget',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'phone',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'address',
                    operator: 'contains',
                    value: inputValue
                }
            ],
        }
    }).data;

    this.dataBinding.skip = 0;
}

private photoURL(dataItem: any): string {
    const code: string = dataItem.img_id + dataItem.gender;
    const image: any = images;

    return image[code];
}

private flagURL(dataItem: any): string {
    const code: string = dataItem.country;
    const image: any = images;

    return image[code];
}



}