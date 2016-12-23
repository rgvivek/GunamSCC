import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'app/patient/patient.service';
import { User } from 'app/user/user';

@Component({
    selector: 'nsf-sign-up',
    templateUrl:"app/sign-up/sign-up.html"
})

export class SignUpComponent implements OnInit{
	constructor(private patientService: PatientService, private router: Router) { };
	ngOnInit(): void {
		this.user = new User();
	}
	signUp(): void {
	  this.patientService.signUpUser(this.user).subscribe(
	  	success => {
	  		var status = success.status;
	  		if(status === 0){
	  			let link = ['/patients'];
	  			this.router.navigate(link);
	  		}
	  		alert(success.message);
	  		this.user = new User();
	  	},
	  	error =>  this.errorMessage = <any>error);
	  );
	}
}