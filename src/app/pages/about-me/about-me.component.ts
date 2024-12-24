import { Component } from '@angular/core';
import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    NavToolbarComponent,
    CommonModule, 
    MatCardModule, 
    MatIconModule, 
    MatButtonModule,
    MatTabsModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
