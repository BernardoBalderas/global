import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Service } from '../models/service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };

  selectedService: Service;
  services: Service[];

   //URL LOCAL
  // readonly URL_API = 'http://localhost:3000/api/services';

  //URL HEROKU
  readonly URL_API = '/api/services';

  constructor(public http: HttpClient ) {
    this.selectedService = new Service();
   }

  get(){
    return this.http.get(this.URL_API);
  }

  post(service, imgService: File) : Observable<any> {

    let datos = new FormData();
    datos.append("title", service.title);
    datos.append("descripcion", service.descripcion);
    datos.append("precio", service.precio);
    datos.append("filename", imgService,  service.filename);

    return this.http.post(this.URL_API, datos);
  }

  put(service, imgService: File) : Observable<any> {

      let datos = new FormData();
      datos.append("title", service.title);
      datos.append("descripcion", service.descripcion);
      datos.append("precio", service.precio);
      datos.append("filename", imgService,  service.filename);

      return this.http.put(this.URL_API + `/${service._id}`, datos);
  }

  delete(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
