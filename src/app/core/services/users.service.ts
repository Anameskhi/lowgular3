import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{

  getAllUsers():Observable<any>{
    return this.get('users')
  }

  
}
