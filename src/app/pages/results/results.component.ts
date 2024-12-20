import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NavToolbarComponent,
    SearchBarComponent
],
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  sneakers = [
    {
      image: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      name: 'Air Max 90',
      price: 100,
      brand: 'Nike',
    },
    {
      image: 'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=60&dpr=1&trim=color&updated_at=1669232518',
      name: 'Yeezy Boost 350',
      price: 200,
      brand: 'Adidas',
    },
  ];
}
