import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import * as $ from 'jquery';
import { from } from 'rxjs';
import { Products } from '../products';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  public id:number;

  constructor(private route:ActivatedRoute, private productService:ProductServiceService) { 
    this.route.paramMap
      .subscribe(params =>{
        this.id = +params.get('id');
        //console.log(id);
      })
  }

  ngOnInit() {
    //   $('.color-choose input').on('click', function() {
    //     var headphonesColor = $(this).attr('data-image');
  
    //     $('.active').removeClass('active');
    //     $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
    //     $(this).addClass('active');
    // });
    this.getDetails(this.id);
    $(document).ready(function(){
      $('.thumb a').click(function(e){
          e.preventDefault();
          $('.imgBox img').attr("src",$(this).attr("href")); 
      })
    })
  }
  public p:Products;
  getDetails(id):void{
    this.p = this.productService.getProduct(id)
  }

}
