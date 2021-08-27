import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //this base URL will be fetched from environment file
  baseURL = '';

  constructor( private httpClient:HttpClient) { }

  //POST API service
  post(url:string, headers?: {}, params?: {}): Observable<any>{
     return this.httpClient.post(this.baseURL+url, params, {headers: new HttpHeaders()})

  }
}
