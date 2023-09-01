import { ControlStoryDecorator, StatusBarSection } from '@tatuarvela/wisp';

export default {
  component: StatusBarSection,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: 'Status bar',
  },
};
