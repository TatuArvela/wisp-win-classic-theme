import { StatusBar, Window, Wisp } from '@tatuarvela/wisp';
import React from 'react';

import config from '../config';

export default {
  component: Wisp,
  title: 'controls/StatusBar',
};

export const StatusBarStory = (): JSX.Element => (
  <Wisp {...config} enableDefaultElements={false}>
    <Window id="1">
      <StatusBar>Status bar</StatusBar>
    </Window>
  </Wisp>
);
StatusBarStory.story = {
  name: 'StatusBar',
};

export const WithResizeHandle = (): JSX.Element => (
  <Wisp {...config} enableDefaultElements={false}>
    <Window id="1" initialState={{ title: 'StatusBar' }}>
      <StatusBar showResizeHandle>Status bar</StatusBar>
    </Window>
  </Wisp>
);
WithResizeHandle.story = {
  name: 'StatusBar with resize handle',
};
