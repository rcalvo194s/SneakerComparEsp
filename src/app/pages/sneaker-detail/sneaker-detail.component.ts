import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { SneakersFirebaseService } from '../../../services/sneakers-firebase.service';
import { Sneaker } from '../../models/sneaker.model';
import { Price } from '../../models/price.model';

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
    id: '',
    imagenUrl: '',
    marca: '',
    modelo: '',
    nombre: '',
    precioBase: 0,
    precios: []
  };
  
  compareTable: Price[] = [];

  constructor(private sneakersService: SneakersFirebaseService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data => {
      let sneakerId: string = data['sneakerId'];
      this.getSneaker(sneakerId);
    })
  }

  getSneaker(sneakerId: string) {
    this.sneakersService.getSneakerById(sneakerId).subscribe(data => {
      this.sneaker = data;
      this.compareTable = data.precios;
    });
  }
}
