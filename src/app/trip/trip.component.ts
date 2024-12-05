import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../trip.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent implements OnInit {
   title = 'Bus-Frontend';
postTripForm: any = FormGroup;

constructor(
  private router: Router,
private formBuilder: FormBuilder,
private tripService: TripService
){

}

ngOnInit(): void {
  this.postTripForm = this.formBuilder.group({
    coachName: ["",[ Validators.required]],
    station:["", [Validators.required]],
    departureTime:["", [Validators.required]],
    departureDate:["", [Validators.required]],
    noOfSeats:["", [Validators.required]],
    destination:["", [Validators.required]]

  })
 
    
}
PostTrip(){
  var formData = this.postTripForm.value;
  // var data = {
  //   name: formData.coachName,
  //   seatsAvailable:formData.seatsAvailable,
  //   price:formData.price
  // }

  console.log(formData)
  this.tripService.postTrip(this.postTripForm.value).subscribe((response: any)=>{
    console.log(response)
  })

}

}




