import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
public productArrNew : Product = new Product(0,"",0,0);

public productArr : Product []= [
  new Product (1,'mobile lcd',5,50),
  new Product (2,'port usb',8,30),
  new Product (3,'b7000-glue',6,10),
  new Product (4,'cable flex',10,30),
  new Product (5,'mobile tool kit',9,25)
  
]

addProduct(){
  this.productArr.push(this.productArrNew);
  
}

modifyProduct(){
  var index = this.productArr.findIndex(p => p.code === this.productArrNew.code);
  if(index!==-1) {
    this.productArr[index] = this.productArrNew;
  }
  this.productArrNew = new Product (0,'',0,0);
}






selectProduct(productArrNew:Product){
  this.productArrNew.code = productArrNew.code;
  this.productArrNew.description = productArrNew.description;
  this.productArrNew.quantity = productArrNew.quantity;
  this.productArrNew.price = productArrNew.price;

}


}