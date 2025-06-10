import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  cartCount = 0;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartCount();
    this.cartService.cart$.subscribe(() => this.updateCartCount());
  }

  updateCartCount(): void {
    this.cartCount = this.cartService.getTotalCount();
  }

}
