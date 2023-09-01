import React from 'react';

import { ControlStoryDecorator, Well } from '@tatuarvela/wisp';

export default {
  component: Well,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: <div>Well, well, well!</div>,
  },
};
