import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Products } from '../products';
import { query } from '@angular/core/src/render3/query';
import { ActivatedRoute } from '@angular/router';
// import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public prods:Products[];
  public filterd:Products[];

  cat:string;
  constructor(private productService:ProductServiceService,private ac:ActivatedRoute) { 
    this.productService.getProducts()
    .subscribe(p => this.filterd=this.prods=p);

    this.cat = this.ac.snapshot.queryParamMap.get('category');
  
  }

  ngOnInit() { 
    this.filterd = (this.cat)?
      this.prods.filter(f => f.category.toLowerCase().includes(this.cat.toLowerCase())):
      this.prods;
   }
  // getProducts():void{
  //   this.productService.getProducts()
  //    .subscribe(pr=>this.prods=pr);
  // }

  filterQ(query: string){
    this.filterd = (query) ?
      this.prods.filter(f => f.name.toLowerCase().includes(query.toLowerCase())):
      this.prods;
  }
}
