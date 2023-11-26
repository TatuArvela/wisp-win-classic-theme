import {
  AddressBar,
  ControlStoryDecorator,
  statefulProps,
} from '@tatuarvela/wisp';

export default {
  component: AddressBar,
  decorators: [ControlStoryDecorator],
  tags: ['autodocs'],
};

export const Default = {
  args: {
    value: 'https://www.google.com/',
  },
  parameters: statefulProps('value', 'onChange', ''),
};

export const WithLabel = {
  args: {
    children: 'Address:',
    value: 'https://www.google.com/',
  },
  parameters: statefulProps('value', 'onChange', ''),
};
