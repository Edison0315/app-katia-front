import { Component, OnInit } from '@angular/core';
import { PdvService } from 'src/app/services/demo/pdv.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news: any;

	constructor(private pdv_service: PdvService) { }

  ngOnInit() {
    this.pdv_service.getNews()
		.subscribe((news: any) => {
			news = news.news
			let news_array = []

			news.map((m: any) => {
				news_array.push(m)
			})

			this.news = news_array

      console.log(this.news)
		})
  }

}
