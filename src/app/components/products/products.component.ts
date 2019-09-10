import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import {NgForm} from '@angular/forms';
import { Product } from 'src/app/models/product';



declare var M: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  constructor(public productService: ProductService) { }
  filename: File;

  ngOnInit() {
    this.get();
  }

  cargarImagen(image : any){
    this.filename = image.target.files[0];
   }
 

  add(form: NgForm){
    if(form.value._id) {
      this.productService.put(form.value, this.filename)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly!'})     
        this.get();
      })
    }else{
      this.productService.post(form.value, this.filename)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly!'})     
        this.get();
      });  
    }
  }

  get(){
    this.productService.get()
    .subscribe(res => {
    this.productService.products = res as Product[];
    console.log(res);
    });
  }

  edit(product: Product){
    this.productService.selectedProduct = product;
  }

  delete(_id: string){
    if(confirm('Are you sure you want to delete it?')) {
      this.productService.delete(_id)
      .subscribe(res => {
        this.get();
        M.toast({html: 'Deleted successfully'});
      });  
    }
  }

  resetForm(form?: NgForm ){
    if (form){
      form.reset();
      this.productService.selectedProduct = new Product();
    }
  }
}