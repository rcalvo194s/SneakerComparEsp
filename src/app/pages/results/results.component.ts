import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Sneaker } from '../../models/sneaker.model';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NavToolbarComponent,
    SearchBarComponent,
],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  
  sneakers: Sneaker[] = [
    {
      id: '0',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      nombre: 'Air Max 90',
      precio: 100,
      marca: 'Nike',
      modelo: 'Blue Royal'
    },
    {
      id: '1',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      nombre: 'Yeezy',
      precio: 200,
      marca: 'Adidas',
      modelo: 'Boost 350'
    },
    {
      id: '0',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      nombre: 'Air Max 90',
      precio: 100,
      marca: 'Nike',
      modelo: 'Blue Royal'
    },
    {
      id: '1',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      nombre: 'Yeezy',
      precio: 200,
      marca: 'Adidas',
      modelo: 'Boost 350'
    },
    {
      id: '0',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      nombre: 'Air Max 90',
      precio: 100,
      marca: 'Nike',
      modelo: 'Blue Royal'
    },
    {
      id: '1',
      imagenUrl: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      nombre: 'Yeezy',
      precio: 200,
      marca: 'Adidas',
      modelo: 'Boost 350'
    },
  ];
}
