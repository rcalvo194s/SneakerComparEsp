import { Component, OnInit } from '@angular/core';
import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { Sneaker } from '../../models/sneaker.model';
import { SneakersFirebaseService } from '../../../services/sneakers-firebase.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    NavToolbarComponent
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent implements OnInit {
  sneakers: Sneaker[] = [];
  selectedSneaker: Sneaker | null = null; // TODO Cambiar más adelante

  constructor(private sneakerFirebaseService: SneakersFirebaseService) {}

  ngOnInit() {
    this.getSneakersFromFirebase();
  }

  getSneakersFromFirebase() {

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
