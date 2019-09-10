import { Component, OnInit } from '@angular/core';

import { RolService } from '../../services/rol.service';
import {NgForm} from '@angular/forms';
import { ProviderAst } from '@angular/compiler';
import { Rol } from 'src/app/models/rol';

declare var M: any;

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers: [RolService]
})
export class RolesComponent implements OnInit {

  constructor(public rolService: RolService) { }

  ngOnInit() {
    this.getRoles();
  }

  addRol(form: NgForm){
    if(form.value._id) {
      this.rolService.putRol(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly!'})     
        this.getRoles();
      })
    }else{
      this.rolService.postRol(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly!'})     
        this.getRoles();
      });  
    }
  }

  getRoles(){
    this.rolService.getRoles()
    .subscribe(res => {
    this.rolService.roles = res as Rol[];
    console.log(res);
    });
  }

  editRol(rol: Rol){
    this.rolService.selectedRol = rol;
  }

  deleteRol(_id: string){
    if(confirm('Are you sure you want to delete it?')) {
      this.rolService.deleteRol(_id)
      .subscribe(res => {
        this.getRoles();
        M.toast({html: 'Deleted successfully'});
      });  
    }
  }

  resetForm(form?: NgForm ){
    if (form){
      form.reset();
      this.rolService.selectedRol = new Rol();
    }
  }
}
