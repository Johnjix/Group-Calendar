import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-day-events-display',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './day-events-display.component.html',
  styleUrl: './day-events-display.component.scss',
})
export class DayEventsDisplayComponent {
  @Input() dateOfEvent!: Date;

  constructor() {}
}
