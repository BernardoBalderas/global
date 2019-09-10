import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };

  selectedProduct: Product;
  products: Product[];
  
   //URL LOCAL
  //  readonly URL_API = 'http://localhost:3000/api/products';

  //URL HEROKU
  readonly URL_API = '/api/products';

  constructor(public http: HttpClient ) {
    this.selectedProduct = new Product();
   }

  get(){
    return this.http.get(this.URL_API);
  }

  post(product, imgProducto: File) : Observable<any> {

    let datos = new FormData();
    datos.append("codigo", product.codigo);
    datos.append("title", product.title);
    datos.append("descripcion", product.descripcion);
    datos.append("categoria", product.categoria);
    datos.append("precio", product.precio);
    datos.append("filename", imgProducto,  product.filename);

    return this.http.post(this.URL_API, datos);
  }

  put(product, imgProducto: File) : Observable<any> {

    let datos = new FormData();
    datos.append("codigo", product.codigo);
    datos.append("title", product.title);
    datos.append("descripcion", product.descripcion);
    datos.append("categoria", product.categoria);
    datos.append("precio", product.precio);
    datos.append("filename", imgProducto,  product.filename);

      return this.http.put(this.URL_API + `/${product._id}`, datos);
  }
  delete(_id: string){
    console.log(_id);
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
