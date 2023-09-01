import { argon, ControlStoryDecorator, TimeInput } from '@tatuarvela/wisp';

export default {
  component: TimeInput,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Time:',
    inlineLabel: false,
  },
  parameters: argon('value', 'onChange', { minutes: 0, hours: 0 }),
};
