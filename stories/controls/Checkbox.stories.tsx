import { useState } from '@storybook/addons';
import { Checkbox, Window, Wisp } from '@tatuarvela/wisp';
import React from 'react';

import config from '../config';

export default {
  component: Wisp,
  title: 'controls/Checkbox',
};

export const CheckboxStory = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const toggleChecked = () => setChecked((prevState) => !prevState);

  return (
    <Wisp {...config} enableDefaultElements={false}>
      <Window id="1">
        <Checkbox checked={checked} onClick={toggleChecked} />
      </Window>
    </Wisp>
  );
};
CheckboxStory.story = {
  name: 'Checkbox',
};
