import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';
import { SneakerDetailComponent } from './pages/sneaker-detail/sneaker-detail.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CrudComponent } from './pages/crud/crud.component';
import { AuthGuard } from './auth.guard';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'detail', component: SneakerDetailComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: 'crud', component: CrudComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];
