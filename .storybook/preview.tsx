import { Preview } from '@storybook/react';
import { statefulPropsDecorator, defaultTheme, storybookConfigContextDecorator } from '@tatuarvela/wisp';

import themes from '../src/themes';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Wisp', ['Basics', 'Advanced Usage', 'Theming'], 'controls'],
      },
    },
  },
  decorators: [
    storybookConfigContextDecorator({
      themes: [
        themes["win9x-16-colors"],
        themes["win9x-256-colors"],
        themes["win9x-16-bit"],
        themes["win9x-24-bit"],
        themes["win9x-32-bit"],
        themes["win2k"],
        themes["vaporwin"],
        defaultTheme,
      ],
    }),
    statefulPropsDecorator,
  ],
};

export default preview;
