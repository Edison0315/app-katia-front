import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdvService {

  // url: string = `http://localhost:3000/api`;
  // url: string = `http://192.168.1.64:3000/api`;
  url: string = 'https://app-katia.herokuapp.com/api';

  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'PBs5zO5qdO2pGK38TEQ2FpR4fM1WHte2qEAsQ8ByavDRU5pnwGOQF23uPEOYW831C3pjfGxMN854XtDx'
  })

  headerscors: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })

  constructor(
    private http: HttpClient) { }

  getPatientMetrics(){
    return this.http.get(`${this.url}/patient/metrics`)
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
    return this.http.get(`${this.url}/files`)
  }

  getUserById(){
    return this.http.get(`${this.url}/users/62da27a378d64bb27c290b76`)
  }

  getNews(){
    return this.http.get(`${this.url}/news`)
  }

  // **********
  // Users CRUD
  // **********
  updateUser(data){
    return this.http.put(`${this.url}/users/62da27a378d64bb27c290b76`, data)
  }
  
  // *********
  // News CRUD
  // *********
  storeNews(data){
    return this.http.post(`${this.url}/news`, data)
  }

  deleteNews(uid){
    return this.http.delete(`${this.url}/news/${uid}`)
  }

  updateNews(uid, data){
    return this.http.put(`${this.url}/news/${uid}`, data)
  }

  // ****************
  // Appointmets CRUD
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
    return this.http.delete(`${this.url}/files/${uid}`)
  }

  storeFile(data){

    const formData = new FormData()

    formData.append('file', data.file)
    formData.append('name', data.name)
    formData.append('file_type', data.file_type)
    formData.append('created_at', data.created_at)
    formData.append('updated_at', data.updated_at)

    /*const options: FileUploadOptions = {
      fileKey: 'file'
    }

    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload(data.file, `http://localhost:3000/api/files/`, options)*/

    return this.http.post(`${this.url}/files/`, formData, { headers: this.headerscors })
  }
}
