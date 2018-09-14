import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit, OnDestroy {

  id: string;
  product: IProduct ;
  subscription: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _service: ProductsService,
              private _cart: CartService) { }

  ngOnInit() {
    // this.code =  this._route.snapshot.paramMap.get('id');
    this.subscription = this._route
      .paramMap
      .subscribe(
        res => {
               this.id = res.get('id');
               this._service.getProductById(+this.id).subscribe(
                res2 => {
                   this.product = res2;
                }
            );
               }
      );
  }
  addToCart() {
    this._cart.addToCart(this.product);
    this._router.navigate(['/products']);   // Navigation programmatique
  }



  // It is advised to unsubscribe in ngOnDestry()
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
