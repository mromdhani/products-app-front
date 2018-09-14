import { Component, OnInit } from '@angular/core';
import { IProduct } from '../domain/iproduct';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  data: IProduct[] ;
  totalAmount = 0;



  constructor(private _service: CartService) { }

  ngOnInit() {
    this.data = this._service.getCartProducts();
    this.totalAmount = this._service.getCartTotalAmount();
  }
  commander(): void {
     // Si Authentifié
     //   alors
           // invoquer le endpoint commandeController en lui soumettant
          //   Si le resultat de l'invocation est bon
               // Alors vider le panier et retourner à la page welcome
            // Sinon re-authentifier
     //   Sinon : NON AUTHENTIFIE
  }

}
