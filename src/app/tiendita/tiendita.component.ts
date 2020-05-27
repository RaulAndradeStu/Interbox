import { Component, OnInit } from '@angular/core';
import { Botanas } from '../Botanas'

@Component({
  selector: 'app-tiendita',
  templateUrl: './tiendita.component.html',
  styleUrls: ['./tiendita.component.scss']
})
export class TienditaComponent implements OnInit {
  Botanas=Botanas;
  constructor() { }

  ngOnInit(): void {
  }

}
