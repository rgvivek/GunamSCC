import {Component, OnInit } from '@angular/core';
import { Header } from './common/header/header';
import { Patient } from './patient/patient';
import { PatientService } from './patient/patient.service';

@Component({
    selector: 'nsf-app',
    templateUrl:"app/app.html"
})



export class AppComponent {
	constructor(private patientService: PatientService) { };
	header : Header = { title : "Gunam Siddha Cure Center",
						subTitle : "Patients Record Holder"
						};
	getPatients():void{
		this.patientService.getPatients().subscribe(
                     patients => this.patients = patients,
                     error =>  this.errorMessage = <any>error);
	}
	
	ngOnInit(): void {
		//this.getPatients();
	}
}