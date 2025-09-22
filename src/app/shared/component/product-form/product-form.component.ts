import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { SnackbarService } from '../../service/snackbar.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  isInEditMode : boolean = false;
  productForm !: FormGroup;
  pId !: string;

  constructor(private productService : ProductService,
                  private snackabr : SnackbarService,
                  private route : ActivatedRoute,
                  private router : Router,
                private uuid : UuidService) { }

  createProductForm(){
    this.productForm = new FormGroup({
      productName : new FormControl(null, [Validators.required]),
      productDetails : new FormControl(null, [Validators.required]),
      canReturn : new FormControl(null, [Validators.required]),
      pStatus : new FormControl(null, [Validators.required]),
      price : new FormControl(null, [Validators.required]),
      image : new FormControl(null, [Validators.required]),
    })
  }

  onAddProduct(){
    if(this.productForm.valid){
      let productObj = {
        ...this.productForm.value,
        pId : this.uuid.generateUuid()
      }
      console.log(productObj);
      
      this.productService.createProduct(productObj)
      this.productForm.reset();
      this.snackabr.openSnackbar(`New Product ${productObj.productName} added successfully`)
    }
  }

  editProduct(){
    let pId = this.route.snapshot.params['pId'];
    console.log(pId);
    
    if(pId){
      this.productService.fetchProduct(pId)
      .subscribe({
        next : data => {
          console.log(data);
          
          this.productForm.patchValue(data);
          this.isInEditMode = true;
        },
        error : err => this.snackabr.openSnackbar(err)
      })
    }
  }

  onUpdate(){
    if(this.productForm.valid){
      this.pId = this.route.snapshot.params['pId'];
      console.log(this.pId);
      
      let updateObj = {
        ...this.productForm.value,
        pId : this.pId
      }
      console.log(updateObj);
      
      this.productService.updateProduct(updateObj)
      this.productForm.reset();
      this.snackabr.openSnackbar(`Product ${updateObj.productName} updated successfully`)
    }
  }

  ngOnInit(): void {
    this.createProductForm();
    this.editProduct()
  }

}
