import { Component } from '@angular/core';
import { CartService } from './services/cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'ProductApp';

  constructor(public cartService: CartService) {}
}
