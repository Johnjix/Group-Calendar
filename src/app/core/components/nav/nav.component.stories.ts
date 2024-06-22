import {
  Meta,
  StoryObj,
  applicationConfig,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { NavComponent } from './nav.component';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  provideRouter,
} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of } from 'rxjs';
import { routes } from '../../app.routes';

const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (key: string) => null, // No specific parameters for this example
    },
    url: [
      {
        path: 'home', // Simulating the '/home' path
      },
    ],
  },
  url: of([
    {
      path: 'home', // Simulating the '/home' path
    },
  ]),
};
const meta: Meta<NavComponent> = {
  title: 'Nav',
  component: NavComponent,
  decorators: [
    applicationConfig({
      providers: [
        provideRouter(routes),
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute,
        },
      ],
    }),
    moduleMetadata({
      imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<NavComponent>;

export const Primary: Story = {};
