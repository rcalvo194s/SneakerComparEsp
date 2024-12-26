import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-toolbar',
  standalone: true,
    imports: [
      MatToolbarModule,
      MatButtonModule,
      FormsModule,
      RouterModule
    ],
  templateUrl: './nav-toolbar.component.html',
  styleUrl: './nav-toolbar.component.scss'
})
export class NavToolbarComponent {

}
