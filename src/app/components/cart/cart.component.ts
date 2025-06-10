

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: false,
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartForm!: FormGroup;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cartForm = this.fb.group({
      items: this.fb.array([])
    });
    this.loadCart();
  }

  get items() {
    return this.cartForm.get('items') as FormArray;
  }

  loadCart() {
    const cart = this.cartService.getCart();
    this.items.clear();
    cart.forEach(product => {
      this.items.push(this.fb.group({
        id: [product.id],
        title: [product.title],
        price: [product.price],
        quantity: [product.quantity, [Validators.required, Validators.min(1)]],
        total: [product.price * product.quantity]
      }));
    });
  }

  updateQuantity(index: number) {
    const itemGroup = this.items.at(index);
    if (itemGroup.invalid) return;
    
    const quantity = itemGroup.get('quantity')?.value;
    const price = itemGroup.get('price')?.value;
    
    itemGroup.get('total')?.setValue(price * quantity);
    this.cartService.updateQuantity(itemGroup.value.id, quantity);
  }

  removeItem(index: number) {
    const itemId = this.items.at(index).get('id')?.value;
    this.cartService.removeFromCartProductById(itemId);
    this.items.removeAt(index);
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  get totalItems(): number {
    return this.cartService.getTotalCount();
  }

  checkout() {
    if (this.cartForm.valid) {
      // Here you would typically navigate to a checkout page
      alert('Proceeding to checkout!');
    }
  }
}
