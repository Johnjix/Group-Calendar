import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Attendee } from '../../../models/attendee.model';
import { UserPillComponent } from '../user-pill/user-pill.component';

@Component({
  selector: 'app-day-events-display',
  standalone: true,
  imports: [CommonModule, MatCardModule, UserPillComponent],
  templateUrl: './day-events-display.component.html',
  styleUrl: './day-events-display.component.scss',
})
export class DayEventsDisplayComponent implements OnChanges {
  @Input() dateOfEvent!: Date;
  @Input() organiser!: string;
  @Input() eventName!: string;
  @Input() eventLocation!: string;
  @Input() attendees: Attendee[];

  protected totalNumberOfAttendees: number;

  constructor() {
    this.attendees = [];
    this.totalNumberOfAttendees = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotalNumberOfAttendees(changes['attendees'].currentValue);
  }

  private calculateTotalNumberOfAttendees(attendees: Attendee[]): void {
    this.totalNumberOfAttendees = attendees.length;
  }
}
