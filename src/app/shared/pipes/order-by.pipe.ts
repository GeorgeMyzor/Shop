import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: Array<IProduct>, ascendant: any = 'true', fieldName: any = 'name'): any {
    array.sort((a: IProduct, b: IProduct) => {
      if (a[fieldName] < b[fieldName]) {
        return ascendant == 'true' ? -1 : 1;
      } else if (a[fieldName] > b[fieldName]) {
        return ascendant == 'true' ? 1 : -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
