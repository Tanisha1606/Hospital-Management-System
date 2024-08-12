import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { PathLocationStrategy } from '@angular/common';
import { Patient } from '../patient';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls:[ './admindash.component.css']
})
export class AdmindashComponent {
  searchText:string='';
  patients:Patient[]=[];   
  filteredPatients: Patient[] = [];
constructor(private patientService:PatientService,private adminAuthService: AdminauthService,private router:Router){}
ngOnInit():void{
  this.getPatients();
}


getPatients(){
  this.patientService.getPatientList().subscribe(data=>
  {
this.patients=data;
this.filteredPatients=data;

});
}
/*searchPatients() {
  this.filteredPatients = this.patients.filter(patient =>
    patient.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
    patient.id.toString().includes(this.searchText) ||
    patient.age.toString().includes(this.searchText) ||
    patient.blood.toLowerCase().includes(this.searchText.toLowerCase()) ||
    patient.prescription.toLowerCase().includes(this.searchText.toLowerCase()) ||
    patient.dose.toLowerCase().includes(this.searchText.toLowerCase()) ||
    patient.urgency.toLowerCase().includes(this.searchText.toLowerCase())
  );
}*/
delete(id:number){
  this.patientService.delete(id).subscribe(data=>{
    console.log(data);
    this.getPatients();
  });
}
logout(){
  this.adminAuthService.logout();
  this.router.navigate(['home']);
}

}
