import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL='http://localhost:7200'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  postCustomer(data: any){
    return this.httpClient.post(BASE_URL + "/api/v1/customer/add", data,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
}
