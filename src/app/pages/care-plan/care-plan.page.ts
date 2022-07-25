import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { PdvService } from 'src/app/services/demo/pdv.service';

@Component({
  selector: 'app-care-plan',
  templateUrl: './care-plan.page.html',
  styleUrls: ['./care-plan.page.scss'],
})
export class CarePlanPage implements OnInit {

	@ViewChild(IonModal) modal: IonModal;

	is_insert: boolean = true
	hide_hours: boolean = false

	name: string;

	appointment_id: string = '';

	appointments: any;

	activity: string      = '';
	date: string          = '';
	time_start: string    = '';
	time_end: string      = '';
	location: string      = '';
	description: string   = '';

	constructor(private pdv_service: PdvService) { }

	ngOnInit() {
		this.getAppointmentsService()
	}

	getAppointmentsService(){
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

	cleanFields(){
		this.activity    = '';
		this.date        = '';
		this.location    = '';
		this.description = '';
	}

	dateSelect(event){
		let date  = event.detail.value
		date      = date.split('T')

		this.date = date[0]
	}

	timeStartSelect(event){
		let date  = event.detail.value
		date      = date.split('T')

		let hour  = date[1]
		hour      = hour.split('-')

		this.time_start = hour[0]
	}

	timeEndSelect(event){
		let date  = event.detail.value
		date      = date.split('T')

		let hour  = date[1]
		hour      = hour.split('-')

		this.time_end = hour[0]
	}

	editElement(data){
		this.hide_hours = true
		this.is_insert  = false

		this.appointment_id = data.id

		const date       = new Date(data.date).toISOString();

		this.activity    = data.appointment;
		this.date        = date;
		this.location    = data.location;
		this.description = data.description;

		this.modal.present()
	}

	openModal(){
		this.is_insert  = true
		this.hide_hours = false
		this.cleanFields()
		this.modal.present()
	}

	cancel(){
		this.modal.dismiss(null, 'cancel')
	}

	confirm(is_insert:boolean) {
		if(is_insert) {
			this.storeElement()
		} else {
			this.updateElement()
		}
	}

	storeElement() {
		const appointment = {
			activity: this.activity,
			responsible_user_id: '17',
			date: this.date,
			time_start: this.time_start,
			time_end: this.time_end,
			location: this.location,
			description: this.description,
			notify_app: false
		}

		this.pdv_service.storeAppointment(appointment)
		.subscribe((message: any) => {
			this.modal.dismiss(this.name, 'confirm');
			this.appointments = []
			this.getAppointmentsService()
		})
	}
	
	updateElement(){
		const appointment = {
			activity: this.activity,
			responsible_user_id: '17',
			date: this.date,
			time_start: '08:20:00',
			time_end: '08:40:00',
			location: this.location,
			description: this.description,
			notify_app: false
		}

		this.pdv_service.updateAppointment(this.appointment_id, appointment)
		.subscribe((message: any) => {
			this.modal.dismiss(this.name, 'confirm');
			this.appointments = []
			this.getAppointmentsService()

			this.appointment_id = ''
		})
	}

}
