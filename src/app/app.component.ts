import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SneakersFirebaseService } from '../services/sneakers-firebase.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  sneakers: any[] = [];

  constructor(private sneakersService: SneakersFirebaseService) {}
  
  ngOnInit() {
    console.log('Firebase initialized successfully!');
    this.sneakersService.getSneakers().subscribe(data => {
      this.sneakers = data;
      console.log(this.sneakers);
    });
  }
}
