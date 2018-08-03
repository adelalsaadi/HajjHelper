import { Component } from '@angular/core';
import { ApiService} from "./shared/api.service"
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
  ]
})
export class AppComponent {
  loading = false;
  constructor(private api: ApiService) { 
    
    document.addEventListener('deviceready', function() { 
      console.log(device);
      alert(device.platform); 
      }, false); 
       
      api.loading.subscribe(loading => this.loading = loading);
   
  }
}
