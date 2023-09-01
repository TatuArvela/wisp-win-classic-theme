import { ControlStoryDecorator, Label } from '@tatuarvela/wisp';

export default {
  component: Label,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Label, label, label!',
  },
};
