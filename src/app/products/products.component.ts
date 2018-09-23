import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public prods:Products[];
  constructor(private productService:ProductServiceService) { }

  ngOnInit() {
  this.getProducts();
    
  }
  getProducts():void{
    this.productService.getProducts()
     .subscribe(pr=>this.prods=pr);
  }
}
