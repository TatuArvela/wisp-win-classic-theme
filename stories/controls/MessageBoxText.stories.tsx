import { ControlStoryDecorator, MessageBoxText } from '@tatuarvela/wisp';

export default {
  component: MessageBoxText,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'MessageBoxText',
  },
};
