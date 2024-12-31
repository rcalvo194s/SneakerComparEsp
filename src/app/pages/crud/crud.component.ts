import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Sneaker } from '../../models/sneaker.model';
import { SneakersFirebaseService } from '../../../services/sneakers-firebase.service';
import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { EditCreateSneakerComponent } from '../../components/edit-create-sneaker/edit-create-sneaker.component';

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

  constructor(private sneakersService: SneakersFirebaseService, private activeRoute: ActivatedRoute, private dialog: MatDialog  ) {}

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
    const dialogRef = this.dialog.open(EditCreateSneakerComponent, {
      data: { sneaker: {}, edit: false },
    });
  }

  editSneaker(sneaker: Sneaker) {
    const dialogRef = this.dialog.open(EditCreateSneakerComponent, {
      data: { sneaker: {...sneaker}, edit: true },
    });
  }

  saveSneaker() {

  }

  deleteSneaker(sneakerId: string) {

  }
} 
