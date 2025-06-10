import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  loading = true;


  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.productService.getProductById(+id!).subscribe({
      next: res => {
          this.product = res,
          this.loading = false;
      },
      error: err => {
        console.error("Error Fetching Product by ID", err);
        this.loading = false;
      }
    });
  }
  
   addToCart() {
    this.cartService.addToCart(this.product);
    alert(`${this.product.title} added to cart!`);
   }

}
