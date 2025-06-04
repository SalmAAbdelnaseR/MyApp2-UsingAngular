import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
  standalone: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: any[], title: string, maxPrice: number | null, category: any): any[] {
    if (!products) return [];
    return products.filter(product => {
      const matchesTitle = title ? product.title.toLowerCase().includes(title.toLowerCase()) : true;
      const matchesPrice = maxPrice != null ? product.price <= maxPrice : true;
      const matchesCategory = category ? product.category === category : true;

      return matchesTitle && matchesPrice && matchesCategory;
    });
  }

}
