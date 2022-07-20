import { Component, OnInit } from '@angular/core';
import { PdvService } from 'src/app/services/demo/pdv.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  alerts: any;

	constructor(private pdv_service: PdvService) { }

  ngOnInit() {
    this.pdv_service.getPatientAlerts()
		.subscribe((alerts: any) => {

			alerts = alerts.patient_risks
			let alerts_array = []

			alerts.map((m: any) => {
				alerts_array.push(m)
			})

			this.alerts = alerts_array
		})
  }

}
