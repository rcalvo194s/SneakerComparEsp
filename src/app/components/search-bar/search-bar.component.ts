import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
      MatInputModule,
      MatIconModule,
      FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/results'], { queryParams: { search: this.searchQuery } });
  }
}
