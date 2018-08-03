import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

    private action = {
        GetPractice: "Practice/GetPractice",
    }
    constructor() {
        this.loadDataFromLocalStorage();
    }
    newApptCreated = false;

    private _loggedIn = false;
    private _token: string;

    private _authStatusSource = new BehaviorSubject<boolean>(false);

    authStatus = this._authStatusSource.asObservable();
    newAppointmentCreated = this._authStatusSource.asObservable();

    setAuthStatus(token) {
        this._loggedIn = true;
        console.log(token)
        if(token == undefined || token == 'undefined' || token == 'null' || token == null)
            this._loggedIn =  false;
        
        console.log(this._loggedIn)
        this._authStatusSource.next(this._loggedIn);
        localStorage.setItem('auth_token', token);
    }
    setNewAppointmentCreated(created) {
        this._authStatusSource.next(created);
    }
    

    loadDataFromLocalStorage() {

        //Load token
        this._token = localStorage.getItem('auth_token');
        this.setAuthStatus(this._token);
    }

    IsLoggedIn() {
        return this._loggedIn;
    }

    getLocalStorage(key) {
        let data = localStorage.getItem(key);
        if (data && data != 'null' && data != 'undefined')
            return JSON.parse(data);
        return null;
    }

    private setLocalStorage(key, data) {
        if (data)
            localStorage.setItem(key, JSON.stringify(data));
    }
}