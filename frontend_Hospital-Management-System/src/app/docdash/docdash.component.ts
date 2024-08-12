import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
 
  constructor(private patientService:PatientService, private router:Router,private docauthService:DocauthService){}
  patients:Patient[]=[]
  searchText:string='';   
  filteredPatients: Patient[] = [];
  ngOnInit():void{
    this.getPatients();
    
  }
  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }
  // searchPatients() {
  //   this.filteredPatients = this.patients.filter(patient =>
  //     patient.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //     patient.id.toString().includes(this.searchText) ||
  //     patient.age.toString().includes(this.searchText) ||
  //     patient.blood.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //     patient.prescription.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //     patient.dose.toLowerCase().includes(this.searchText.toLowerCase()) ||
  //     patient.urgency.toLowerCase().includes(this.searchText.toLowerCase())
  //   );
  // }
  update(id:number){
    this.router.navigate(['update-patient',id])

  }

  delete(id:number){
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();

    })
  }

  view(id:number){
    this.router.navigate(['view-patient',id])
  }

  logout(){
    this.docauthService.logout();
    this.router.navigate(['home']);
  }

}
