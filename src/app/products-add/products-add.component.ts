import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../domain/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent implements OnInit {

  product: IProduct = { name: '', unitPrice: 0  };   // For the purposes of DataBinding ...

  constructor(private _service: ProductsService, private _router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    this._service
            .addProduct(this.product)
            .subscribe( res => {
                         console.log('Ajout avec succès du produit : ' + res  );
                         // Naviguer vers la vue liste de produits
                         this._router.navigate(['/products']);
            });
  }

}
