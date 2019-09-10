import { Component, OnInit } from '@angular/core';

import { ClientService } from '../../services/client.service';
import {NgForm} from '@angular/forms';
import { ProviderAst } from '@angular/compiler';
import { Client } from 'src/app/models/client';
import * as jsPDF from 'jspdf';

declare var M: any;
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [ClientService]
})
export class ClientsComponent implements OnInit {

  constructor(public clientService: ClientService) { }

  ignore = false;

  ngOnInit() {
    this.getClients();
  }
  addClient(form: NgForm){
    if(form.value._id) {
      this.clientService.putClient(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly!'})     
        this.getClients();
      })
    }else{
      this.clientService.postClient(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly!'})     
        this.getClients();
      });  
    }
  }

  getClients(){
    this.clientService.getClients()
    .subscribe(res => {
    this.clientService.clients = res as Client[];
    console.log(res);
    });
  }

  editClient(client: Client){
    this.clientService.selectedClient = client;
  }

  deleteClient(_id: string){
    if(confirm('Are you sure you want to delete it?')) {
      this.clientService.deleteClient(_id)
      .subscribe(res => {
        this.getClients();
        M.toast({html: 'Deleted successfully'});
      });  
    }
  }

  resetForm(form?: NgForm ){
    if (form){
      form.reset();
      this.clientService.selectedClient = new Client();
    }
  }
  generarPDF(){
    var id = document.getElementById("tabMensaje");
    var pdf = new jsPDF({
      orientation: 'landscape',
      unit:'pt',
      format:'carta'
    });

      // Se asignan más propiedades al PDF
      pdf.setDrawColor("#444444");
      pdf.setFont("arial", "italic");
      pdf.setFontSize(25);    
      pdf.text("Datos del personal", 360, 30,{ align: "center", width: 500} )
      pdf.setFontSize(13);    
      pdf.text("Hotel-Spa Posada Bonita", 600, 85, {align: "left"})     
      pdf.text("Dolores Hidalgo C.I.N", 600, 105, { align: "left" })
      pdf.fromHTML(id,165,150,{align: "center",width: 500} );     
      pdf.setDrawColor(255, 0, 0);
      pdf.line(750, 50, 100, 50);  
      
      var img = new Image();
      img.src="/assets/img/logo1.jpg";
      pdf.addImage(img, 'jpg', 90, 65);
      pdf.save("Reporte.pdf");
      pdf.line(600, 100, 200, 100);
      pdf.addPage('a3', 'portrait');
      this.ignore = false;
    
    
  }

}
