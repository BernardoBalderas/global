import { Component, OnInit } from '@angular/core';

import { PublicidadService } from '../../services/publicidad.service';
import {NgForm} from '@angular/forms';
import { Publicidad } from 'src/app/models/publicidad';


declare var M: any;

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css'],
  providers: [PublicidadService]
})
export class PublicidadComponent implements OnInit {

  constructor(public publicidadService: PublicidadService) { }

  filename: File;
  ngOnInit() {
    this.getPublicidad();
  }
  cargarImagen(image : any){
    this.filename = image.target.files[0];
   }
 
   addPublicidad(form: NgForm){
     if(form.value._id) {
       this.publicidadService.putPublicidad(form.value, this.filename)
       .subscribe(res =>{
         this.resetForm(form);
         M.toast({html: 'Updated Successfuly!'})     
         this.getPublicidad();
       })
     }else{
       this.publicidadService.post(form.value, this.filename)
       .subscribe(res =>{
         this.resetForm(form);
         M.toast({html: 'Save Successfuly!'})     
         this.getPublicidad();
       });  
     }
   }
 
   getPublicidad(){
     this.publicidadService.getPublicidad()
     .subscribe(res => {
     this.publicidadService.publicidad = res as Publicidad[];
     console.log(res);
     });
   }
 
   editPublicidad(publicidad: Publicidad){
     this.publicidadService.selectedPublicidad = publicidad;
   }
 
   deletePublicidad(_id: string){
     if(confirm('Are you sure you want to delete it?')) {
       this.publicidadService.deletePublicidad(_id)
       .subscribe(res => {
         this.getPublicidad();
         M.toast({html: 'Deleted successfully'});
       });  
     }
   }
 
   resetForm(form?: NgForm){
     if (form){
       form.reset();
       this.publicidadService.selectedPublicidad = new Publicidad();
     }
   }
     
 }
 
