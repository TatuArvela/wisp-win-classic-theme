import { ControlStoryDecorator, WindowContent } from '@tatuarvela/wisp';

export default {
  component: WindowContent,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Content, content, content!',
  },
};
