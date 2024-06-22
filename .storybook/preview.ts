import { componentWrapperDecorator, type Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    componentWrapperDecorator(
      (
        story,
      ) => `<div class="mat-app-background mat-typography" style="margin: 2rem;">
    ${story}
  </div>`,
    ),
  ],
};

export default preview;
