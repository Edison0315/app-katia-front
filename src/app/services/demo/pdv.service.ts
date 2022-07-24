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
 
  getAppointments(){
    return this.http.get('https://perfildemo.katiahealth.com/api/appointments/patient/2?program=%&goal=%&status=Activa')
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
  
  // *********
  // News CRUD
  // *********
  storeNews(data){
    return this.http.post('http://localhost:9001/api/news', data)
  }

  deleteNews(uid){
    return this.http.delete(`http://localhost:9001/api/news/${uid}`)
  }

  updateNews(uid, data){
    return this.http.put(`http://localhost:9001/api/news/${uid}`, data)
  }

}
