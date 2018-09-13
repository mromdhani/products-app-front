import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../domain/iproduct';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  data: IProduct[];

  constructor(private _service: ProductsService) { }

  ngOnInit() {
    this._service.getProductsAll().subscribe(
      resp => this.data = resp,
      err => console.log('*** Attention : Il y a eu erreur lors de l\'appel getAll : ' + err));
  }

}
