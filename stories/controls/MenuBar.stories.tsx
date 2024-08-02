import { ControlStoryDecorator, MenuBar } from '@tatuarvela/wisp';
import React from 'react';

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
    isThrobberActive: true,
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
    isThrobberActive: true,
    throbberIcon: 'warning',
    throbberActiveIcon: 'error',
  },
};
