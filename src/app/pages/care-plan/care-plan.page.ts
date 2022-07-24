import { Component, OnInit } from '@angular/core';
import { PdvService } from 'src/app/services/demo/pdv.service';

@Component({
  selector: 'app-care-plan',
  templateUrl: './care-plan.page.html',
  styleUrls: ['./care-plan.page.scss'],
})
export class CarePlanPage implements OnInit {

	appointments: any;

	constructor(private pdv_service: PdvService) { }

	ngOnInit() {
		this.pdv_service.getAppointments()
		.subscribe((appointments: any) => {
			appointments = appointments.patient_appointments
			let appointments_array = []

			appointments.map((m: any) => {
				appointments_array.push(m)
			})

			this.appointments = appointments_array
		})
	}

}
