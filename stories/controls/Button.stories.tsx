import { Button, Window, Wisp } from '@tatuarvela/wisp';
import React from 'react';

import config from '../config';

export default {
  component: Wisp,
  title: 'controls/Button',
};

export const ButtonStory = (): JSX.Element => (
  <Wisp {...config}>
    <Window id="1">
      <Button>Button</Button>
    </Window>
  </Wisp>
);
ButtonStory.story = {
  name: 'Button',
};
