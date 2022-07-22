export class User {
    name:       string;
    last_name:  string;
    email:      string;
    gender:     string;
    phone:      string;
    birthdate:  string;
    patient_id: number;
    status:     boolean;
    created_at: string;
    updated_at: string;
    uid:        string;

    constructor(name:string, last_name:string,
        email:string, gender:string, phone:string, 
        birthdate:string, patient_id:number,
        status:boolean, created_at:string, 
        updated_at:string, uid:string){
            this.name = name;
            this.last_name = last_name;
            this.email = email;
            this.gender = gender;
            this.phone = phone;
            this.birthdate = birthdate;
            this.patient_id = patient_id;
            this.status = status;
            this.created_at = created_at;
            this.updated_at = updated_at;
            this.uid = uid;
    }
}