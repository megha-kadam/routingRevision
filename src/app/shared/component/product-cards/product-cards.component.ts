import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { SnackbarService } from '../../service/snackbar.service';
import { FormGroup } from '@angular/forms';
import { Iproduct } from '../../model/product.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.scss']
})
export class ProductCardsComponent implements OnInit {
  productObj !: Iproduct;
  productId !: string;

  constructor(private productService : ProductService,
                private snackabr : SnackbarService,
                private route : ActivatedRoute,
                private router : Router,
              private matDialog : MatDialog) { }

  getProduct(){
    this.route.params
    .subscribe((param : Params) => {
      console.log(param);
     
      this.productId = param['pId'];
      console.log(this.productId);
      
     
      if(this.productId){
        this.productService.fetchProduct(this.productId)
        .subscribe({
          next : data => {
            this.productObj = data;
          },
          error : err => this.snackabr.openSnackbar(err)
        })
      }
    })
  }

  onRemove(product : Iproduct){
    let matConfig : MatDialogConfig = new MatDialogConfig();
    matConfig.data = `Are you sure, you want to remove this ${product.productName} removed successsfully`
    matConfig.width = '500px';

    let matDialogRef = this.matDialog.open(GetConfirmComponent, matConfig)
    matDialogRef.afterClosed()
    .subscribe(res => {
      if(res){
        this.productService.removeProduct(product.pId)
        this.snackabr.openSnackbar(`Product ${product.productName} removed successfully`)
      }
    })
  }

  ngOnInit(): void {
    this.getProduct()
  }

}
