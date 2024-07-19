import { ControlStoryDecorator, MenuBar } from '@tatuarvela/wisp';
import React from 'react';

import icons from '../../src/icons';

export default {
  component: MenuBar,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: (
      <>
        <div
          style={{
            height: '100%',
            display: 'flex',
            padding: '0px 4px',
            alignItems: 'center',
          }}
        >
          Example
        </div>
      </>
    ),
    isThrobberAnimated: true,
  },
};

export const CustomIcon = {
  args: {
    children: (
      <>
        <div
          style={{
            height: '100%',
            display: 'flex',
            padding: '0px 4px',
            alignItems: 'center',
          }}
        >
          Example
        </div>
      </>
    ),
    isThrobberAnimated: true,
    throbberImage: icons.warning[48],
  },
};
