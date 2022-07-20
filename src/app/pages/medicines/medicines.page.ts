import { Component, OnInit } from '@angular/core';
import { PdvService } from 'src/app/services/demo/pdv.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.page.html',
  styleUrls: ['./medicines.page.scss'],
})
export class MedicinesPage implements OnInit {

  medicines: any;

  constructor(private pdv_service: PdvService) { }

	ngOnInit() {
		this.pdv_service.getPatientMedicines()
		.subscribe((medicines: any) => {
			medicines = medicines.patient_medicines
			let medicines_array = []

			medicines.map((m: any) => {
				medicines_array.push(m)
			})

			this.medicines = medicines_array

		})
  }

}
