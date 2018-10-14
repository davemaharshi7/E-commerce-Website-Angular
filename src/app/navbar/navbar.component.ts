import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Products } from '../products';

@Component({
  selector: 'go-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public prods:Products[];
  public filterd:Products[];
  collapsed = true;
     toggleCollapsed(): void {
       this.collapsed = !this.collapsed;
     }
  constructor(private ps:ProductServiceService) { 
    this.ps.getProducts()
    .subscribe(p => this.filterd=this.prods=p)
  }

  ngOnInit() {
  }

  filter(query: string){
    this.filterd = (query) ?
      this.prods.filter(f => f.name.toLowerCase().includes(query.toLowerCase())):
      this.prods;
  }

}
