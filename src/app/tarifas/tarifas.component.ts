import { Component, OnInit } from '@angular/core';
import { Servicios } from '../Servicios'

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.scss']
})
export class TarifasComponent implements OnInit {
  c1='1 control';
  c2='2 controles';
  Servicios=Servicios;
  //servicio;
  constructor() { }

  ngOnInit(): void {
  }

}
