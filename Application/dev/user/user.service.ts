import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
	// Resolve HTTP using the constructor
    constructor (private http: Http) {}
     // private instance variable to hold base url
    private usersUrl = 'http://localhost:8000/patients'; 
	loginUser(user : User) : void{
		let res = this.http.post(this.usersUrl, user).map(this.extractData)
                    .catch(this.handleError);
		return res;
	}

	signUpUser(user : User) : void{
		let res = this.http.post(this.usersUrl, user).map(this.extractData)
                    .catch(this.handleError);
		return res;
	}

	private extractData(res: Response) {
		let body = res.json();
		return body || { };
	}
	private handleError (error: Response | any) {
		// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
		  const body = error.json() || '';
		  const err = body.error || JSON.stringify(body);
		  errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
		  errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}