import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../../services/service.service';
import {NgForm} from '@angular/forms';
import { ProviderAst } from '@angular/compiler';
import { Service } from 'src/app/models/service';

declare var M: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ServiceService]
})
export class ServicesComponent implements OnInit {

  constructor(public serviceService: ServiceService) { }
  filename: File;

  ngOnInit() {
    this.get();
  }

  cargarImagen(image : any){
    this.filename = image.target.files[0];
   }

  add(form: NgForm){
    if(form.value._id) {
      this.serviceService.put(form.value, this.filename)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly!'})     
        this.get();
      })
    }else{
      this.serviceService.post(form.value, this.filename)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly!'})     
        this.get();
      });  
    }
  }

  get(){
    this.serviceService.get()
    .subscribe(res => {
    this.serviceService.services = res as Service[];
    console.log(res);
    });
  }

  edit(service: Service){
    this.serviceService.selectedService = service;
  }

  delete(_id: string){
    if(confirm('Are you sure you want to delete it?')) {
      this.serviceService.delete(_id)
      .subscribe(res => {
        this.get();
        M.toast({html: 'Deleted successfully'});
      });  
    }
  }

  resetForm(form?: NgForm ){
    if (form){
      form.reset();
      this.serviceService.selectedService = new Service();
    }
  }
}
