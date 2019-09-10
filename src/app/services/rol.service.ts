import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Rol } from '../models/rol';
import { RolesComponent } from '../components/roles/roles.component';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  selectedRol: Rol;
  roles: Rol[];

   //URL LOCAL
  // readonly URL_API = 'http://localhost:3000/api/roles';

  //URL HEROKU
  readonly URL_API = '/api/roles';

  constructor(public http: HttpClient ) {
    this.selectedRol = new Rol();
  }

  getRoles(){
    return this.http.get(this.URL_API);
  }

  postRol(Rol: Rol) {
    return this.http.post(this.URL_API, Rol);
  }

  putRol(rol: Rol){
      return this.http.put(this.URL_API + `/${rol._id}`, rol);
  }

  deleteRol(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
