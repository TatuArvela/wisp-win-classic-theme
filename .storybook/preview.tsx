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
        order: ['Wisp', ['Basics', 'Advanced Usage', 'Theming'], 'Window', 'controls'],
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
      defaultWindowHeight: 116,
      defaultWindowWidth: 160,
      minWindowHeight: 50,
      minWindowWidth: 100,
    }),
    statefulPropsDecorator,
  ],
};

export default preview;
