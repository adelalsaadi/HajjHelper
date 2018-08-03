import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ApiService {
    baseUrl: string = environment.apiUrl;

    private _loading = new BehaviorSubject<boolean>(false);
    loading = this._loading.asObservable();

    private action = {
        Login: "Token/Login",
        Signin: "Token/Signin"
    }



    constructor(private router: Router, private data: DataService) {

    }

  
    errorHandler(error: any): void {
      console.log(error)
      return error;
    }

    login(login) {
        //return this.post<any>(this.action.Login, login);
    }

    signin(login) {
        //return this.post<any>(this.action.Signin, login);
    }

    logout() {
        // localStorage.clear();
        // sessionStorage.clear();
        // this.data.setAuthStatus(null);
        // this.router.navigateByUrl("/");
    }
    gotoPage(route = "/") {
        this.router.navigate([route]);
    }

}