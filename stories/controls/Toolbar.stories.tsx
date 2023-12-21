import {
  ControlStoryDecorator,
  Toolbar,
  ToolbarButton,
} from '@tatuarvela/wisp';
import React from 'react';

export default {
  component: Toolbar,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: (
      <>
        <ToolbarButton label="Action" />
        <ToolbarButton icon="wisp" />
      </>
    ),
  },
};
