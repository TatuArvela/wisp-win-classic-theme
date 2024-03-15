import {
  ControlStoryDecorator,
  statefulProps,
  TextInput,
} from '@tatuarvela/wisp';

export default {
  component: TextInput,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Feedback:',
    inlineLabel: false,
    disabled: false,
  },
  parameters: statefulProps('value', 'onChange', ''),
};
