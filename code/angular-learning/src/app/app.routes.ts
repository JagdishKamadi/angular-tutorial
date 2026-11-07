import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { AboutComponent } from './components/about-component/about-component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
