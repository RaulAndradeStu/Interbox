import { Component, OnInit } from '@angular/core';
import {EnVenta} from '../EnVenta';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  EnVenta=EnVenta;
  ariculo;

  constructor(private route: ActivatedRoute) {
    
   }
  /**
   *
   */  
  ngOnInit() {
    
  } 
}