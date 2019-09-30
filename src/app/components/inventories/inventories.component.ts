import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service'
import { Inventory } from 'src/app/models/inventory';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';

declare var M: any;

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.css']
})
export class InventoriesComponent implements OnInit {

  constructor(public inventoryService: InventoryService, public router:Router) { }

  filterInventory = '';
  ignore = false;
  
  ngOnInit() {
    this.getInventories();
  }
  getInventories(){
    this.inventoryService.getInventories()
    .subscribe (res =>{
      this.inventoryService.inventories = res as Inventory [];
      console.log(res);
    });
  }
  getSupplie(){
    this.router.navigate(['/supplies']);
  }
  generarPDF(){
    var id = document.getElementById("tabinvent");
    var pdf = new jsPDF({
      orientation: 'landscape',
      unit:'pt',
      format:'carta'
    });
      // Se asignan más propiedades al PDF
      pdf.setDrawColor("#444444");
      pdf.setFont("arial", "italic");
      pdf.setFontSize(25);    
      pdf.text("Libros", 360, 30,{ align: "center", width: 500} )
      pdf.setFontSize(13);    
      pdf.text("Libreria Dolores", 600, 85, {align: "left"})
      pdf.text("Av. Educacion Tecnologica", 600, 105, { align: "left" })     
      pdf.text("Dolores Hidalgo, Gto.", 600, 105, { align: "left" })
      pdf.fromHTML(id,165,150,{align: "center",width: 500} );     
      pdf.setDrawColor(255, 0, 0);
      pdf.line(750, 50, 100, 50);  
      
      var img = new Image();
      img.src="/assets/img/logo2.png";
      pdf.addImage(img, 'png', 90, 65);
      pdf.save("Solicitud-Libros.pdf");
      pdf.line(600, 100, 200, 100);
      pdf.addPage('a3', 'portrait');
      this.ignore = false; 
  }
  functionStock() {
    M.toast({html: 'Materia Prima Suficiente'});
  }
  functionMediumStock(){
    M.toast({html: 'Materia Prima por Agotarse'});
  }
  functionNoStock(){
    M.toast({html: 'Comprar Materia Prima'});
  }
 
  

}
