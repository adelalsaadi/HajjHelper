import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { NgxAlertsService } from '@ngx-plus/ngx-alerts';
import { Patient } from '../../model/patient.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-fdrptnew',
  templateUrl: './fdrptnew.component.html',
  styleUrls: ['./fdrptnew.component.css']
})
export class FdrptNewComponent implements OnInit {

  member = new Patient();
  step = 1;
  NextStep = "Next"
  //PA
  eyes: string[] = ['Spont', 'Verbal', 'Pain', 'None'];
  verbals: string[] = ['Oriented', 'Confused', 'Inappropriate', 'Incomprehensible', 'None'];
  motors: string[] = ['Obeys', 'Localizes', 'Withdrawal', 'Flexion', 'Extension', 'None'];

  //TA
  nerue: string[] = ['Spont', 'Verbal', 'Pain', 'None'];
  skinColor: string[] = ['Normal', 'Cyanotic', 'Pale/ash', 'Jaundice'];
  temperatures: string[] = ['Normal', 'Hot', 'Cold'];
  pupils: string[] = ['Perl', 'Constrict', 'Dilated', 'Fixed'];
  lungs: string[] = ['Respiratory Distress', 'Apenea', 'Clear', 'Crepitation', 'Wheezes'];

  loss: string[] = ['15%', '15%-30%', '>40%'];

  constructor(private data: DataService, private toastr: ToastrService
    , private alert: NgxAlertsService) {
      //this.member = new Patient();
      
      //this.member.;
      this.member.body=""
  }


  ngOnInit() {
  }

  onChange(event){
    console.log(event)
    console.log(this.member.eye)
    this.member.gcs = 4 - this.member.eye + 5 - this.member.verbal + 6 - this.member.motor;
  }

  setStep(step){
    this.step = step;
    if(step==5)
    this.NextStep="Send"
  }
  
  setColor(part) {
    return this.member.body.indexOf(part) > -1 ? "selected" : "unselected";
  }

  onClick(part) {
    if (this.member.body.indexOf(part) > -1)
    this.member.body = this.member.body.replace(part,"");
    else 
    this.member.body = this.member.body + part;
  }


  saveReport() {
    //this.apptService.saveNewAppointment(null);
  }
}
