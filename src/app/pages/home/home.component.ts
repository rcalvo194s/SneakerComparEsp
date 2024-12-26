import { Component, OnInit } from '@angular/core';

import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { SneakersFirebaseService } from '../../../services/sneakers-firebase.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavToolbarComponent,
    SearchBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  
  sneakers: any[] = [];
  sneakersData: any[] = []

  constructor(private sneakersService: SneakersFirebaseService) {}

  ngOnInit() {
    console.log('Firebase initialized successfully!');
    // this.uploadSneakers();
    this.sneakersService.getSneakers().subscribe(data => {
      this.sneakers = data;
      console.log(this.sneakers);
    });
  }

  // uploadSneakers() {
  //   this.sneakersData.forEach(async (sneaker) => {
  //       await this.sneakersService.addSneaker(sneaker);
  //       console.log(`Zapatilla ${sneaker.nombre} subida con éxito.`);
  //   });
  // }
}
