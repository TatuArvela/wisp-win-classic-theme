import { ControlStoryDecorator, ToolbarButton } from '@tatuarvela/wisp';

export default {
  component: ToolbarButton,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Button',
  },
};
