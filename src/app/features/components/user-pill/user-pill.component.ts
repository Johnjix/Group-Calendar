import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MaterialColorScheme } from '../../../shared/generateRandomMaterialColorScheme';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-user-pill',
  standalone: true,
  imports: [CommonModule, MatBadgeModule],
  templateUrl: './user-pill.component.html',
  styleUrl: './user-pill.component.scss',
})
export class UserPillComponent {
  @Input() userName!: string;
  @Input() colourScheme!: MaterialColorScheme;
  @Input() plusOneCount!: number;

  constructor() {}
}
