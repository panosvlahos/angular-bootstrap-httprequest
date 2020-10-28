import {Injectable,EventEmitter} from '@angular/core';
import {user}from '../app/model/user.model'

@Injectable(
    {
        providedIn:'root'
    }
)
export class EditService
{
$edit= new EventEmitter();
user:user
constructor(){}
edit()
{
    // console
    // console.log(this.user.name);
    this.$edit.emit(this.user);

    
}
}