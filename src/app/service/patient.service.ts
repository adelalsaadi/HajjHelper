import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { DataService } from '../shared/data.service';
import { NgxAlertsService } from '@ngx-plus/ngx-alerts';

@Injectable()
export class PatientService {




  constructor(private api: ApiService, private alert: NgxAlertsService
    , private data: DataService) {
  }


  logout() {
    this.api.logout();
  }

  gotoPage(route = "/") {
    this.api.gotoPage(route);
  }
}