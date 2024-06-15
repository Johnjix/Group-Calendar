import { Routes } from '@angular/router';
import { HomeComponent } from '../features/components/home/home.component';
import { CalendarComponent } from '../features/components/calendar/calendar.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
];
