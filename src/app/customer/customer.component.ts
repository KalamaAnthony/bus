import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{
  title = 'Bus-Frontend';
  postCustomerForm: any = FormGroup;

  constructor(
    private router: Router,
private formBuilder: FormBuilder,
private customerService: CustomerService
  ){

  }
  
  ngOnInit(): void {
    this.postCustomerForm = this.formBuilder.group({
      firstName: ["",[ Validators.required]],
      lastName:["", [Validators.required]],
      email:["", [Validators.required]],
      nationalId: ["",[ Validators.required]],
      gender: ["",[ Validators.required]],
      nationality: ["",[ Validators.required]],
      phoneNo: ["",[ Validators.required]]

    })
   
      
  }
  postCustomer(){
    var formData = this.postCustomerForm.value;
    // var data = {
    //   name: formData.coachName,
    //   seatsAvailable:formData.seatsAvailable,
    //   price:formData.price
    // }

    console.log(formData)
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe((response: any)=>{
      console.log(response)
    })

  }

}




