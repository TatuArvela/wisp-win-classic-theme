import { Window, WindowStoryDecorator } from '@tatuarvela/wisp';
import React from 'react';

export default {
  component: Window,
  decorators: [WindowStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: <div>Window</div>,
    title: 'Window',
  },
};
