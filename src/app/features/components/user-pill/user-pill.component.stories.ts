import { Meta, StoryObj } from '@storybook/angular';
import { UserPillComponent } from './user-pill.component';
import { getRandomMaterialColorScheme } from '../../../shared/generateRandomMaterialColorScheme';

const meta: Meta<UserPillComponent> = {
  title: 'User Pill',
  component: UserPillComponent,
  argTypes: {
    userName: {
      control: 'text',
    },
    colourScheme: {
      control: 'object',
      table: {
        type: {
          summary: 'object',
        },
        defaultValue: {
          summary: '{ backgroundColor: "#FFFFFF", color: "#000000" }',
        },
      },
      description:
        'Color scheme containing backgroundColor and color properties from the 2014 Material colour scheme',
    },
    plusOneCount: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<UserPillComponent>;

export const Colour1: Story = {
  args: {
    userName: 'Johnjix Bautista Reyes',
    colourScheme: getRandomMaterialColorScheme(),
    plusOneCount: 6,
  },
};
export const Colour2: Story = {
  args: {
    userName: 'Johnjix Bautista Reyes',
    colourScheme: getRandomMaterialColorScheme(),
    plusOneCount: 2,
  },
};
export const Colour3: Story = {
  args: {
    userName: 'Johnjix Bautista Reyes',
    colourScheme: getRandomMaterialColorScheme(),
    plusOneCount: 10,
  },
};
