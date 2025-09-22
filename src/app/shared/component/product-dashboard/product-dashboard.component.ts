import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product.interface';
import { ProductService } from '../../service/product.service';
import { SnackbarService } from '../../service/snackbar.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  products : Array<Iproduct> = [];

  constructor(private productService : ProductService,
              private snackabr : SnackbarService,
              private route : ActivatedRoute,
              private router : Router
  ) { }

  getAllProduct(){
    this.productService.fetchAllProduct()
    .subscribe({
      next : data => {
        this.products = data
      },
      error :  err => this.snackabr.openSnackbar(err)
    })
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

}
