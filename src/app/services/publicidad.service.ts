import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Publicidad } from '../models/publicidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicidadService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };
  
  selectedPublicidad: Publicidad;
  publicidad: Publicidad[];

  //URL LOCAL
  // readonly URL_API = 'http://localhost:3000/api/publicidad';

  //URL HEROKU
  readonly URL_API = '/api/publicidad';

  constructor(public http: HttpClient ) {
    this.selectedPublicidad = new Publicidad();
   }

  getPublicidad(){
    return this.http.get(this.URL_API,);
  }
  post(publicidad, imgImage: File) : Observable<any> {

    let datos = new FormData();
    datos.append("title", publicidad.title);
    datos.append("descripcion", publicidad.descripcion);
    datos.append("filename", imgImage,  publicidad.filename);

    return this.http.post(this.URL_API, datos);
  }

  putPublicidad(publicidad, imgImage: File) : Observable<any> {

    let datos = new FormData();
    datos.append("title", publicidad.title);
    datos.append("descripcion", publicidad.descripcion);
    datos.append("filename", imgImage,  publicidad.filename);

      return this.http.put(this.URL_API + `/${publicidad._id}`, datos);
  }
  deletePublicidad(_id: string){
    console.log(_id);
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
