import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ApiService } from '../shared/api.service';
//declare var QRScanner;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  hajjNumber;
  constructor(private data: DataService,private api: ApiService) {
    
  }

  ngOnInit() {
  }
  
  scanQRCode(){
    // QRScanner.scan(function (err, text){
    //   if(err){
    //     // an error occurred, or the scan was canceled (error code `6`)
    //   } else {
    //     // The scan completed, display the contents of the QR code:
    //     this.code = text;
    //   }
    // });
  }

  displayContents(err, text){
    if(err){
      // an error occurred, or the scan was canceled (error code `6`)
    } else {
      // The scan completed, display the contents of the QR code:
      this.hajjNumber = text;
    }
  }
  
  gotoHajjEntry() {
      this.api.gotoPage('/apptnew');
  }
}
