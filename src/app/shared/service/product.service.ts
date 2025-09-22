import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product.interface';
import { productsArr } from '../const/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products : Array<Iproduct> = productsArr;

  constructor() { }

  fetchAllProduct() :Observable<Array<Iproduct>>{
    return of(productsArr)
  }

  fetchProduct(id : string) : Observable<Iproduct>{
    let getProduct = productsArr.find(p => p.pId === id)!;
    return of(getProduct);
  }

  createProduct(product : Iproduct){
    productsArr.push(product)
  }

  updateProduct(product : Iproduct){
    let getIndex = productsArr.findIndex(p => p.pId === product.pId);
    productsArr[getIndex] = product
  }

  removeProduct(id : string){
    let getIndex = productsArr.findIndex(p => p.pId === id);
    productsArr.splice(getIndex, 1);
  }
}
