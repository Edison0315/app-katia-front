import { Component, OnInit } from '@angular/core';
import { PdvService } from 'src/app/services/demo/pdv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isModalOpen = false;

  metrics: [];
  metric_selected: [];
  metric_util_selected: any;


  metrics_utiles = [
	{
		"name": "presion",
		"url": "assets/images/presion.jpg",
    },
	{
		"name": "azucar",
		"url": "assets/images/azucar.jpg",
	},
	{
		"name": "colesterol",
		"url": "assets/images/colesterol.jpeg",
	},
	{
		"name": "peso",
		"url": "assets/images/peso.jpg",
	},
	{
		"name": "habitos",
		"url": "assets/images/habitos.jpg",
	},
	{
		"name": "actividad",
		"url": "assets/images/actividad.png",
	},
	{
		"name": "tabaco",
		"url": "assets/images/tabaco.jpg",
	},
	{
		"name": "saludable",
		"url": "assets/images/saludable.jpg",
	}
  ]

  /*metrics = [
      {
          "checked": 0,
          "value": "136/118",
          "goal": "120/80",
          "date": "2021-03-17",
          "title": "Presion Arterial"
      },
      {
          "checked": 0,
          "value": 124,
          "goal": 100,
          "date": "2021-05-04",
          "title": "Azucar en la Sangre"
      },
      {
          "checked": 0,
          "value": 168,
          "goal": 129,
          "date": "2021-03-14",
          "title": "Colesterol"
      },
      {
          "date": "2021-05-14",
          "goal": 186,
          "value": 149,
          "checked": 1,
          "title": "Peso"
      },
      {
          "checked": 1,
          "title": "Habitos Alimenticios"
      },
      {
          "checked": 0,
          "title": "Actividad Fisica"
      },
      {
          "checked": 1,
          "title": "Consume Tabaco"
      },
      {
          "checked": 1,
          "title": "Es saludable"
      }
  ];*/

  /*metric_selected = {
    "checked": 0,
    "value": "136/118",
    "goal": "120/80",
    "date": "2021-03-17",
    "title": "Presion Arterial"
  };*/

  constructor(private pdv_service: PdvService) { }

	ngOnInit() {
		this.pdv_service.getPatientMetrics()
					.subscribe((metrics: any) => {
						this.metrics = metrics
					})
	}

	showDetail(index: number){
		this.metric_selected = []
		this.isModalOpen     = true;
		this.metric_selected = this.metrics[index]
		this.metric_util_selected = this.metrics_utiles[index]
	}

	closeModal(){
		this.isModalOpen = false;
	}

}
