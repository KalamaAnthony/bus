import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL='http://localhost:7200'

@Injectable({
  providedIn: 'root'
})
export class TripService {
  constructor(private httpClient: HttpClient) { }

  postTrip(data: any){
    return this.httpClient.post(BASE_URL + "/api/v1/trip/add", data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
}
