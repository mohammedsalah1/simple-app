import { Injectable } from '@angular/core';
import {XhrService} from '../../@core/services/xhr/xhr.service'
import {Observable} from 'rxjs';
import {User , UserAdapter} from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private xhr: XhrService) { }

  list(params: any): Observable<any>{
    return this.xhr.get(null,'users',params)
  }
}
