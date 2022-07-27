import { Component, OnInit } from '@angular/core';
import { PdvService } from 'src/app/services/demo/pdv.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	user: User = {
		name:       "",
    	last_name:  "",
    	email:      "",
    	gender:     "",
    	phone:      "",
    	birthdate:  "",
    	patient_id: 0,
    	status:     true,
    	created_at: "",
    	updated_at: "",
    	uid:        ""
	};

	isModalOpen: boolean = false

	constructor(private pdv_service: PdvService) { }

	ngOnInit() {
		this.pdv_service.getUserById()
		.subscribe((user: User) => {
			user      = Object(user).user
			this.user = user
		})
	}

	cancel(){
		this.isModalOpen = false
	}

	editProfile(){
		this.isModalOpen = true
	}
	
	updateProfile(){	

		const { name, last_name, email, phone } = this.user

		const obj = { name, last_name, email, phone }

		this.pdv_service.updateUser(obj)
		.subscribe((message: any) => {
			this.cancel()
		})


	}
}
