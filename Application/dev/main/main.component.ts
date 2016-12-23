import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'app/patient/patient.service';

@Component({
    selector: 'nsf-main',
    templateUrl:"app/main/main.html"
})
export class MainComponent {
	constructor(private patientService: PatientService, private router: Router) { };
	goToPatients(): void {
	  let link = ['/patients'];
	  this.router.navigate(link);
	}
	addPatient() : void {
	  let link = ['/patients/0'];
	  this.router.navigate(link);
	}
	addUser() : void {
	  let link = ['/signup'];
	  this.router.navigate(link);
	}
	ngOnInit(): void {
		this.patientService.authenticate().subscribe(
                    patients => this.patients = patients,
                    error =>  this.errorMessage = <any>error);
	}
}