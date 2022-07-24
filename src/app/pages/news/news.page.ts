import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { PdvService } from 'src/app/services/demo/pdv.service';
import { format, parseISO, formatDistance, formatRelative, subDays } from 'date-fns'


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

	@ViewChild(IonModal) modal: IonModal;

	is_insert: boolean = true

	icons: {} = {
		'Temperatura': 'temperatura.PNG',
		'Presion': 'presion.png',
		'Mareo': 'mareo.PNG',
		'Dolor de estomago': 'estomago.PNG',
		'Dolor de cabeza': 'cabeza.PNG'
	}

	isModalOpen = false;

	name: string;

	news: any;

	new_uid: string;

	type: string  = '';
	level: string = '';
	date: string  = '';
	time: string  = '';
	comments: string = '';
	
	date_selected: string  = '';
	today: string = format(new Date(), 'yyyy-MM-dd')

	constructor(
		private pdv_service: PdvService) { }

	ngOnInit() {
		this.getNewsService()
	}

	getNewsService(){
		this.pdv_service.getNews()
		.subscribe((news: any) => {
			news = news.news
			let news_array = []

			news.map((m: any) => {
				news_array.push(m)
			})	

			this.news = news_array
		})
	}

	dateSelected(event: any) {
		let date = event.detail.value

		date = date.split('T')

		if(date[1]){
			let time = date[1]
			time     = time.split('-')

			this.date_selected = date[0]
			this.time = time[0]
		}		
	}

	cleanFields(){
		this.type  = ''
		this.level = ''
		this.date  = ''
		this.time  = ''
		this.comments = ''

		this.is_insert = true
	}

	cancel() {
		this.cleanFields()

		this.modal.dismiss(null, 'cancel')
	}

	confirm(is_insert:boolean) {
		if(is_insert) {
			this.storeElement()
		} else {
			this.updateElement()
		}
	}

	showNew(data) {
		this.isModalOpen     = true;
		console.log(data)
	}

	closeModal(){
		this.isModalOpen = false;
	}

	storeElement(){
		const $new = {
			type: this.type,
			level: this.level,
			date: this.date_selected,
			time: this.time,
			comments: this.comments,
			icon: this.icons[this.type],
			patient_id: '11391',
			created_at: this.today,
			updated_at: this.today
		}

		this.pdv_service.storeNews($new)
		.subscribe((message: any) => {
			this.modal.dismiss(this.name, 'confirm');
			this.news = []
			this.getNewsService()
		})
	}

	deleteElement(uid){
		this.pdv_service.deleteNews(uid)
		.subscribe((message: any) => {
			this.news = []
			this.getNewsService()
		})
	}

	updateElement(){
		const $updated = {
			type: this.type,
			level: this.level,
			date: this.date_selected,
			time: this.time,
			comments: this.comments,
			icon: this.icons[this.type],
			patient_id: '11391',
			created_at: this.today,
			updated_at: this.today
		}

		this.pdv_service.updateNews(this.new_uid, $updated)
		.subscribe((message: any) => {
			this.cleanFields()
			this.modal.dismiss(this.name, 'confirm')
			this.news = []

			this.new_uid = ''
			this.getNewsService()
		})
	}

	editElement($new){

		const date = new Date($new.date).toISOString();

		this.new_uid = $new.uid;

		this.type  = $new.type
		this.level = String($new.level)
		this.date  = date
		this.comments = $new.comments

		this.is_insert = false
		this.openModal()
	}

	openModal(){
		this.modal.present()
	}
	

}
