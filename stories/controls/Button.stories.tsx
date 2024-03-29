import { Button, ControlStoryDecorator } from '@tatuarvela/wisp';

export default {
  component: Button,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Button',
  },
};
