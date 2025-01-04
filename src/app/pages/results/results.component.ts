import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { SneakersFirebaseService } from '../../../services/sneakers-firebase.service';
import { Sneaker } from '../../models/sneaker.model';

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
export class ResultsComponent implements OnInit {
  
  sneakers: Sneaker[] = [];
  filteredSneakers: Sneaker[] = [];

  constructor(private sneakersService: SneakersFirebaseService, private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.getSneakersFromFirebase();
  }

  getSneakersFromFirebase() {
    this.sneakersService.getSneakers().subscribe(data => {
      this.sneakers = data;
      this.filteredSneakers = this.sneakers;
      this.searchFilter();
    });
  }

  searchFilter() {
    this.activeRoute.queryParams.subscribe(params => {
      const searchQuery = params['search']?.toLowerCase() || '';
      
      this.filteredSneakers = this.sneakers.filter(sneaker =>
        sneaker.nombre.toLowerCase().includes(searchQuery) ||
        sneaker.modelo.toLowerCase().includes(searchQuery) ||
        sneaker.marca.toLowerCase().includes(searchQuery)
      );
    });
  }

  sneakerDeatil(sneakerId: string) {
    this.router.navigate(['/detail'], { queryParams: { sneakerId: sneakerId } });
  }

  getLowerPrice(sneaker: Sneaker) {
    if (sneaker.precios.length === 0) {
      return 'No hay resultado';
    }
    return Math.min(...sneaker.precios.map((precio) => precio.precio)).toString() + '€';
  }
}
