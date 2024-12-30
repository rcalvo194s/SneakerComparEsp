import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
export class SearchBarComponent implements OnInit {
  searchQuery: string = '';

  constructor(private router: Router, private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.searchQuery = params['search'] || '';
    });
  }

  onSearch() {
    if (this.router.url.startsWith('/crud')) {
      this.router.navigate(['/crud'], { queryParams: { search: this.searchQuery } });
      return;
    }
    this.router.navigate(['/results'], { queryParams: { search: this.searchQuery } });
  }
}
