import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import {
  faCalendar,
  faCalendarDays,
  faHouse,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  faHouse: IconDefinition = faHouse;
  faCalendarDays: IconDefinition = faCalendarDays;
  faUserAstronaut: IconDefinition = faUserAstronaut;
}
