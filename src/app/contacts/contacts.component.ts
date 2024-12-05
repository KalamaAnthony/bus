import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { CoachService } from '../coach.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
  sendmessage: any = FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private coachService: CoachService
  ){

  }
  
  ngOnInit(): void {
    this.sendmessage = this.formBuilder.group({
      FirstName: ["",[ Validators.required]],
      LastName:["", [Validators.required]],
      PhoneNo:["", [Validators.required]],
      Email:["", [Validators.required]]

    })
   
      
  }
  onSubmit(){
    var formData = this.sendmessage.value;
    //
    // var data = {
    //   name: formData.coachName,
    //   seatsAvailable:formData.seatsAvailable,
    //   price:formData.price
    // }

    console.log(formData)
    this.coachService.sendmessage(this.sendmessage.value).subscribe((response: any)=>{
      console.log(response)
    })

  }
}

