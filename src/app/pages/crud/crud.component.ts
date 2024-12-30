import { Component, OnInit } from '@angular/core';
import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { Sneaker } from '../../models/sneaker.model';
import { SneakersFirebaseService } from '../../../services/sneakers-firebase.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    NavToolbarComponent,
    SearchBarComponent
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
  sneakers: Sneaker[] = [];
  filteredSneakers: Sneaker[] = [];
  selectedSneaker: Sneaker | null = null; // TODO Cambiar más adelante

  constructor(private sneakersService: SneakersFirebaseService, private activeRoute: ActivatedRoute ) {}

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

  addSneaker() {

  }

  editSneaker(sneaker: Sneaker) {

  }

  saveSneaker() {

  }

  deleteSneaker(sneakerId: string) {

  }
} 
