import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL='http://localhost:7200'

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  constructor(private httpClient: HttpClient) { }

  postCoach(data: any){
    return this.httpClient.post(BASE_URL + "/api/v1/coach/add", data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  sendmessage(data: any){
    return this.httpClient.post(BASE_URL + "/api/v1/coach/add", data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
  
}
