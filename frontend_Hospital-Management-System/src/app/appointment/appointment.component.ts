import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointments:Appointment[]=[];
  filteredAppointments: Appointment[] = [];
  searchText: string = '';
  constructor(private appointmentService:AppointmentService){}
  ngOnInit():void{
    this.getAppointments();
  }
  getAppointments(){
    this.appointmentService.getAllAppointments().subscribe(data=>{
     this.appointments=data;
    });
  }
  
  /*searchPatients() {
    if (this.searchText.trim() === '') {
      this.filteredAppointments = this.appointments; 
    } else {
      this.filteredAppointments = this.appointments.filter(appointment =>
        appointment.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    }*/
    delete(id:number){
      this.appointmentService.deleteAppointment(id).subscribe(data=>{
        console.log(data);
        this.getAppointments();

      })

    }

}
