import { Component, OnInit } from '@angular/core';
import { CoachService } from '../coach.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrl: './coaches.component.css'
})
export class CoachesComponent implements OnInit{
  title = 'Bus-Frontend';
  postCoachForm: any = FormGroup;

  constructor(
    private router: Router,
private formBuilder: FormBuilder,
private coachService: CoachService
  ){

  }
  
  ngOnInit(): void {
    this.postCoachForm = this.formBuilder.group({
      coachName: ["",[ Validators.required]],
      seatsAvailable:["", [Validators.required]],
      price:["", [Validators.required]]

    })
   
      
  }
  PostCoach(){
    var formData = this.postCoachForm.value;
    // var data = {
    //   name: formData.coachName,
    //   seatsAvailable:formData.seatsAvailable,
    //   price:formData.price
    // }

    console.log(formData)
    this.coachService.postCoach(this.postCoachForm.value).subscribe((response: any)=>{
      console.log(response)
    })

  }

}
