import { Component, OnInit } from '@angular/core';
import { PdvService } from 'src/app/services/demo/pdv.service';

@Component({
  selector: 'app-comorbidities',
  templateUrl: './comorbidities.page.html',
  styleUrls: ['./comorbidities.page.scss'],
})
export class ComorbiditiesPage implements OnInit {

	comorbidities: any;

	constructor(private pdv_service: PdvService) { }

	ngOnInit() {
		this.pdv_service.getPatientComorbidities()
		.subscribe((comorbidities: any) => {
			comorbidities = comorbidities.patient_comorbidities
			let comorbidities_array = []

			comorbidities.map((m: any) => {
				comorbidities_array.push(m)
			})

			this.comorbidities = comorbidities_array
		})
	}

}
