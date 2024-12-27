import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Sneaker } from '../../models/sneaker.model';

@Component({
  selector: 'app-sneaker-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavToolbarComponent,
    SearchBarComponent
  ],
  templateUrl: './sneaker-detail.component.html',
  styleUrls: ['./sneaker-detail.component.scss']
})
export class SneakerDetailComponent implements OnInit {
  sneaker: Sneaker = {
    id: '1',
    imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg',
    marca: 'Nike',
    modelo: 'Chicago Reimagined',
    nombre: 'Air Jordan 1 Retro High OG',
    precioBase: 170,
    precios: []
  };

  compareTable = [
    { web: 'StockX', precio: 220, enlace: 'https://www.stockx.com' },
    { web: 'GOAT', precio: 215, enlace: 'https://www.goat.com' },
    { web: 'Flight Club', precio: 230, enlace: 'https://www.flightclub.com' }
  ];

  constructor() {}

  ngOnInit() {}
}
