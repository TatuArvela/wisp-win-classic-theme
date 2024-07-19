import { MessageBox, WindowStoryDecorator } from '@tatuarvela/wisp';
import React from 'react';

export default {
  component: MessageBox,
  decorators: [WindowStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: <div>MessageBox</div>,
    title: 'MessageBox',
  },
};
