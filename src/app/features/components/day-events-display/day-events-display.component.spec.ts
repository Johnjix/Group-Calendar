import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayEventsDisplayComponent } from './day-events-display.component';

describe('DayEventsDisplayComponent', () => {
  let component: DayEventsDisplayComponent;
  let fixture: ComponentFixture<DayEventsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayEventsDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayEventsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
