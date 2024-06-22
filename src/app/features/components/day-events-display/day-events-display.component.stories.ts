import { Meta, StoryObj } from '@storybook/angular';
import { DayEventsDisplayComponent } from './day-events-display.component';

const meta: Meta<DayEventsDisplayComponent> = {
  title: 'Day Events Display',
  component: DayEventsDisplayComponent,
  tags: ['autodocs'],
  argTypes: {
    dateOfEvent: {
      control: 'date',
    },
  },
};

export default meta;
type Story = StoryObj<DayEventsDisplayComponent>;

export const First: Story = {
  args: {
    dateOfEvent: new Date(),
  },
};
