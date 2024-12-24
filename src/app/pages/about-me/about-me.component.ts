import { Component } from '@angular/core';
import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    NavToolbarComponent,
    CommonModule,
    MatTabsModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
