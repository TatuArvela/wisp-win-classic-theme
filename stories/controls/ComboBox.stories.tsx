import {
  ComboBox,
  ControlStoryDecorator,
  statefulProps,
} from '@tatuarvela/wisp';

export default {
  component: ComboBox,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

const options = ['Banana', 'Strawberry', 'Blueberry', 'Orange'];
export const Default = {
  args: {
    options: options,
    label: 'Smoothie',
    inlineLabel: false,
  },
  parameters: statefulProps('value', 'onChange', undefined),
};
