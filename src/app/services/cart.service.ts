import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];//item=variable  []=arreglo   para almacenar productos
  constructor() { }

  addProduct(articulo){//creacion de metodo con parametro 
    this.items.push(articulo); //asi agregamos un producto al carrito
  }

  //este metodo permite obtener todos los elementos del carrito
  getItems(){
    return this.items;
  }

  //limpiar el contenido del carrito y regresa el arreglo vacio
  clearCart(){
    this.items=[];  // limpia el carrito
    return this.items; //regresa el carrito vacio
  }
}