// auth.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private data: DataService,private router: Router) {}

  canActivate() {

    if(!this.data.IsLoggedIn())
    {
       this.router.navigate(['/login']);
       return false;
    }

    return true;
  }
}