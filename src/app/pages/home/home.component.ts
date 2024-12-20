import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    FormsModule,
    NavToolbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchQuery: string = '';

  ngOnInit() {
    console.log('home!');
  }

  onSearch() {
    console.log('Searching for:', this.searchQuery);
  }
}
