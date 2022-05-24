import { AlertText, Window, Wisp } from '@tatuarvela/wisp';
import React from 'react';

import config from '../config';

export default {
  component: Wisp,
  title: 'controls/AlertText',
};

export const AlertTextStory = (): JSX.Element => (
  <Wisp {...config} enableDefaultElements={false}>
    <Window id="1">
      <AlertText>AlertText</AlertText>
    </Window>
  </Wisp>
);
AlertTextStory.story = {
  name: 'AlertText',
};
