import { Injectable } from '@angular/core';
import { Products } from '../app/products';
import { PRODS } from '../app/mock_products';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }

  public getProducts():Observable<Products[]>{
    return of(PRODS);
  }
  public getProduct(id):Products{
    return PRODS.find(p => p.id == id);
  }
  
}
