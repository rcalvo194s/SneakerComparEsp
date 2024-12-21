import { Component } from '@angular/core';
import { NavToolbarComponent } from '../../components/nav-toolbar/nav-toolbar.component';

@Component({
  selector: 'app-sneaker-detail',
  standalone: true,
  imports: [
    NavToolbarComponent
  ],
  templateUrl: './sneaker-detail.component.html',
  styleUrl: './sneaker-detail.component.scss'
})
export class SneakerDetailComponent {

}
