import { argon, ControlStoryDecorator, ListBox } from '@tatuarvela/wisp';

export default {
  component: ListBox,
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
  parameters: argon('value', 'onChange', undefined),
};
