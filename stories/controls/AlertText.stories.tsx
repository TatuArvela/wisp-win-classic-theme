import { AlertText, ControlStoryDecorator } from '@tatuarvela/wisp';

export default {
  component: AlertText,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'AlertText',
  },
};
