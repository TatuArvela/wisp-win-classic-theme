import { Preview } from '@storybook/react';
import { statefulPropsDecorator, defaultTheme, storybookConfigContextDecorator } from '@tatuarvela/wisp';
import {
  vaporwin,
  win2k,
  win9x16Bit, win9x16Colors,
  win9x24Bit, win9x256Colors,
  win9x32Bit
} from "../src/themes";

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
        win9x16Colors,
        win9x256Colors,
        win9x16Bit,
        win9x24Bit,
        win9x32Bit,
        win2k,
        vaporwin,
        defaultTheme,
      ],
    }),
    statefulPropsDecorator,
  ],
};

export default preview;
