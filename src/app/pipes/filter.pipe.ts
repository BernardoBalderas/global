import { Pipe, PipeTransform } from '@angular/core';
import { Inventory } from '../models/inventory';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log(value);
    if(arg  == '' || arg.length < 3) return value;
    
    const resultInventories = [];
    for(const inventory of value){
      if(inventory.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || 
      inventory.brand.toLowerCase().indexOf(arg.toLowerCase()) > -1)
      {
        resultInventories.push(inventory)        
      };
    };
    return resultInventories;
  }

}
