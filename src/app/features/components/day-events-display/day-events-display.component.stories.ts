import { Meta, StoryObj } from '@storybook/angular';
import { DayEventsDisplayComponent } from './day-events-display.component';
import { fakerEN_GB as faker } from '@faker-js/faker';
import { Attendee } from '../../../models/attendee.model';
import { getRandomMaterialColorScheme } from '../../../shared/generateRandomMaterialColorScheme';

const generateRandomAttendees = (): Attendee[] => {
  const number = faker.number.int(15);
  let attendees: Attendee[] = [];
  for (let i = 0; i < number; i++) {
    const attendee: Attendee = {
      Name: faker.person.fullName(),
      PlusOneCount: faker.number.int(15),
      colourScheme: getRandomMaterialColorScheme(),
    };
    attendees.push(attendee);
  }

  return attendees;
};
const meta: Meta<DayEventsDisplayComponent> = {
  title: 'Day Events Display',
  component: DayEventsDisplayComponent,
  argTypes: {
    dateOfEvent: {
      control: 'date',
    },
    organiser: {
      control: 'text',
    },
    eventName: {
      control: 'text',
    },
    eventLocation: {
      control: 'text',
    },
    attendees: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<DayEventsDisplayComponent>;

export const First: Story = {
  args: {
    dateOfEvent: new Date(),
    organiser: faker.person.fullName(),
    eventName: faker.word.adjective() + ' event',
    eventLocation: faker.location.streetAddress({ useFullAddress: true }),
    attendees: generateRandomAttendees(),
  },
};
