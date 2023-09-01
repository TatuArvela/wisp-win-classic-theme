import { argon, ControlStoryDecorator, Textarea } from '@tatuarvela/wisp';

export default {
  component: Textarea,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Feedback:',
    inlineLabel: false,
  },
  parameters: argon('value', 'onChange', ''),
};
