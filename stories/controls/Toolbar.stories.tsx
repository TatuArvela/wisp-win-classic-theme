import React from 'react';

import {
  ControlStoryDecorator,
  icons,
  Toolbar,
  ToolbarButton,
} from '@tatuarvela/wisp';

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
        <ToolbarButton icon={icons.wisp} />
      </>
    ),
  },
};
