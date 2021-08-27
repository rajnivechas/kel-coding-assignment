import { Injectable } from '@angular/core';
import {Subject, Observable,  Subscription } from 'rxjs';
import {ApiService} from '../../_shared/services/api.service'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private apiService: ApiService
  ) { }

   registerUser(url, headers, params):Observable<any>{    
    
      return this.apiService.post(url,headers,params );
   }

  
}
