import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdvService {

  constructor(private http: HttpClient) { }

  getPatientMetrics(){
    return this.http.get('http://localhost:9001/api/patient/metrics')
  }
  
  // *******************
  // Perfil demo services
  // *******************

  getPatientMedicines(){
    return this.http.get('https://perfildemo.katiahealth.com/api/patient/2/medicines')
  }

  getPatientComorbidities(){
    return this.http.get('https://perfildemo.katiahealth.com/api/patient/11391/comorbidities')
  }

  getPatientAlerts(){
    return this.http.get('https://perfildemo.katiahealth.com/api/patient/11391/risks')
  }
  
  // ******************
  // Localhost services
  // ******************
  
  getFiles(){
    return this.http.get('http://localhost:9001/api/files')
  }

  getUserById(){
    return this.http.get('http://localhost:9001/api/users/62da27a378d64bb27c290b76')
  }

  getNews(){
    return this.http.get('http://localhost:9001/api/news')
  }

}
