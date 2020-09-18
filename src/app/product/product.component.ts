import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import {ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService
    ,private productService:ProductService
    ,private route: ActivatedRoute) { }


  title: string = "Products List";
  filterText: string;
  products: Product[];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = +params.get("categoryId");
      this.productService.getProducts(id).subscribe(data =>{
        this.products = data;
    } )
    })
  }

  addToCard(product){
    this.alertifyService.success("added " + product.name);
  }

}
