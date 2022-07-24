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

    constructor(private pdv_service: PdvService) { }

	ngOnInit() {
		this.getMetrics()
	}

    getMetrics(){
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

    clickGrid(option: string){
        console.log(option)
    }

}
