import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { Sneaker } from '../../models/sneaker.model';
import { SneakersFirebaseService } from '../../../services/sneakers-firebase.service';

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

  constructor(private sneakersService: SneakersFirebaseService) {}

  ngOnInit() {
    this.getSneakersFromFirebase();
  }

  getSneakersFromFirebase() {
    this.sneakersService.getSneakers().subscribe(data => {
      this.sneakers = data;
    });
  }
}
