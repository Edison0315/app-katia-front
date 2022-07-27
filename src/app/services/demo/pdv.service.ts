import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdvService {

  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'PBs5zO5qdO2pGK38TEQ2FpR4fM1WHte2qEAsQ8ByavDRU5pnwGOQF23uPEOYW831C3pjfGxMN854XtDx'
  })

  constructor(private http: HttpClient) { }

  getPatientMetrics(){
    return this.http.get('https://app-katia.herokuapp.com/api/patient/metrics')
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
    return this.http.get('https://app-katia.herokuapp.com/api/files')
  }

  getUserById(){
    return this.http.get('https://app-katia.herokuapp.com/api/users/62da27a378d64bb27c290b76')
  }

  getNews(){
    return this.http.get('https://app-katia.herokuapp.com/api/news')
  }
  
  // *********
  // News CRUD
  // *********
  storeNews(data){
    return this.http.post('https://app-katia.herokuapp.com/api/news', data)
  }

  deleteNews(uid){
    return this.http.delete(`https://app-katia.herokuapp.com/api/news/${uid}`)
  }

  updateNews(uid, data){
    return this.http.put(`https://app-katia.herokuapp.com/api/news/${uid}`, data)
  }

  // ****************
  // appointmets CRUD
  // ****************
  storeAppointment(data){
    return this.http.post(`https://perfildemo.katiahealth.com/api/appointments/schedule/patient/2`, data, { headers: this.headers })
  }

  updateAppointment(id, data){
    return this.http.put(`https://perfildemo.katiahealth.com/api/appointments/${id}/date`, data, { headers: this.headers })
  }

  // **********
  // Files CRUD
  // **********
  deleteFile(uid){
    return this.http.delete(`https://app-katia.herokuapp.com/api/files/${uid}`)
  }
}
