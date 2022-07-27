import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PdvService } from 'src/app/services/demo/pdv.service';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {

	files: any;

	isModalOpen    = false;

	isAddModalOpen = false;

	file: any;

	loading: any;

	tempImage: any;

	constructor(private pdv_service: PdvService,
		private loadingCtrl: LoadingController,
		private camera: Camera) { }

	ngOnInit() {
		this.getFiles()
	}

	getFiles(){
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
		this.showLoading()

		this.pdv_service.deleteFile(file._id)
		.subscribe((message: any) => {
			this.files = []
			this.getFiles()
			
			this.hideLoading()
		})
	}

	async showLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'Por favor espere, se esta ejecutando el proceso.'
		});
		
		this.loading.present();
	}

	async hideLoading() {
		this.loading.dismiss();
	}

	closeModal(){
		this.isModalOpen     = false;
		this.isAddModalOpen     = false;
	}

	showFile(file){
		this.file            = file
		this.isModalOpen     = true;
	}

	addFile(){
		this.isAddModalOpen = true;
	}

	camara(){
		const options: CameraOptions = {
			quality: 60,
			destinationType: this.camera.DestinationType.FILE_URI,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			correctOrientation: true,
			sourceType: this.camera.PictureSourceType.CAMERA
		}
		  
		this.camera.getPicture(options).then((imageData) => {
		// imageData is either a base64 encoded string or a file URI
		// If it's base64 (DATA_URL):

			const img = window.Ionic.WebView.convertFileSrc(imageData)
			this.tempImage = img

		}, (err) => {
		// Handle error
		});
	}

}
