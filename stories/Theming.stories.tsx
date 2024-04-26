import {
  AlertWindow,
  ThemeSwitcher as ThemeSwitcherComponent,
  Wisp,
} from '@tatuarvela/wisp';
import React from 'react';

export default {
  component: Wisp,
  title: 'Wisp/Theming',
};

export const ThemeSwitcher = {
  args: {
    children: (
      <>
        <ThemeSwitcherComponent />
        <AlertWindow id={'1'} title={'TEST'} positionX={240}>
          TEEEST
        </AlertWindow>
      </>
    ),
  },
};
