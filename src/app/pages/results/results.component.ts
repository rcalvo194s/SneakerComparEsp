import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Sneaker } from '../../models/sneaker.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NavToolbarComponent,
    SearchBarComponent,
    RouterModule
],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  
  sneakers: Sneaker[] = [
    {
      id: '0',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      marca: 'Nike',
      modelo: 'Blue Royal',
      nombre: 'Air Max 90',
      precioBase: 100,
      precios: []
    },
    {
      id: '1',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      nombre: 'Yeezy',
      marca: 'Adidas',
      modelo: 'Boost 350',
      precioBase: 200,
      precios: []
    },
    {
      id: '0',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      nombre: 'Air Max 90',
      marca: 'Nike',
      modelo: 'Blue Royal',
      precioBase: 100,
      precios: []
    },
    {
      id: '1',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      nombre: 'Yeezy',
      marca: 'Adidas',
      modelo: 'Boost 350',
      precioBase: 200,
      precios: []
    },
    {
      id: '0',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      nombre: 'Air Max 90',
      marca: 'Nike',
      modelo: 'Blue Royal',
      precioBase: 100,
      precios: []
    },
    {
      id: '1',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      nombre: 'Yeezy',
      marca: 'Adidas',
      modelo: 'Boost 350',
      precioBase: 200,
      precios: []
    },
  ];
}
