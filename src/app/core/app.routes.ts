import { Routes } from '@angular/router';
import { HomeComponent } from '../features/components/home/home.component';
import { CalendarComponent } from '../features/components/calendar/calendar.component';

const homePath: string = 'home';

export const routes: Routes = [
  { path: '', redirectTo: homePath, pathMatch: 'full' },
  { path: homePath, component: HomeComponent },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: '**',
    redirectTo: homePath,
    pathMatch: 'full',
  },
];
