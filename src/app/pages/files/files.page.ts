import { Component, OnInit } from '@angular/core';
import { PdvService } from 'src/app/services/demo/pdv.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {

	files: any;

	constructor(private pdv_service: PdvService) { }

	ngOnInit() {
		this.pdv_service.getFiles()
			.subscribe((files: any) => {
				files = files.files
				let files_array = []

				files.map((m: any) => {
					files_array.push(m)
				})

				this.files = files_array
			})
	}

	deleteFile(file){
		console.log(file)
	}

}
