import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { EnVenta } from '../EnVenta';
import {CartService}from'../services/cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  //EnVenta = EnVenta;
  articulo;
   /**
   * 
   */ 
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.route.paramMap.subscribe(params=>{
      this.articulo = EnVenta[+params.get('articuloid')];
    });
  }

  addToCart(articulo){
    this.cartService.addProduct(articulo);
    window.alert("Tu producto ah sido agregado al carrito de compra");
  }

  showCart(){
    this.cartService.getItems();
    window.alert("viendo tus productos");
  }

  deleteCart(){
    this.cartService.clearCart();
    window.alert("vaciando carrito de compras");
  }

  /**
   * @param articulo
   */  
  ngOnInit(): void {
    
  }

}
