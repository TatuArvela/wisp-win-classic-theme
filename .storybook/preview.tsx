import { Preview } from '@storybook/react';
import { ArgonDecorator, defaultTheme, storybookConfigContextDecorator } from '@tatuarvela/wisp';

import vaporwin from '../src/themes/vaporwin';
import win2k from '../src/themes/win2k';
import win9x16bit from '../src/themes/win9x-16bit';
import win9x16clr from '../src/themes/win9x-16clr';
import win9x32bit from '../src/themes/win9x-32bit';
import win9x256clr from '../src/themes/win9x-256clr';

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
        win2k,
        win9x16bit,
        win9x16clr,
        win9x32bit,
        win9x256clr,
        vaporwin,
        defaultTheme,
      ],
    }),
    ArgonDecorator,
  ],
};

export default preview;
