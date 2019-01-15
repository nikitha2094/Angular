import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';




@Injectable()
export class ContactService {
    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
    }

    /**
     * Get Users
     */
    public getUsers(): Observable<Users[]> {
        let getUsersURL = 'https://192.168.3.23:56890/users/getusers'
        return this.http.get(getUsersURL, { headers: this.headers })
            .map((response: Response) => response.json().data);
    }


    /**
  * This method adds  a new  driver details
  */
    public addDriver(user: Users) {

        let addUserURL = 'https://192.168.3.23:56890/users/addDriver'
        let url = `${addUserURL}`;

        return this.http
            .post(url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(error => console.error("error occured in adding new user  details" + error));
    }



}

export class Users {
    //user model return 
    //but am not mentioned here
}