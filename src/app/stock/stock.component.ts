import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
//product = new Product(0,"",0,0);

productArr :Array <Product> = [
  new Product (1,'mobile lcd',5,50),
  new Product (2,'port usb',8,30),
  new Product (3,'b7000-glue',6,10),
  new Product (4,'cable flex',10,30),
  new Product (5,'mobile tool kit',9,25)
  
]

}
