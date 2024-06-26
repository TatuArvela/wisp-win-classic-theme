import generateTitleGradient from './common/generateTitleGradient';
import { themeBuilder } from './common/themeBuilder';

const theme = themeBuilder({
  id: 'win2k',
  name: 'Windows 2000',
  themeVariables: {
    active: 'rgb(10 36 106)',
    passive: 'rgb(128 128 128)',
    background: 'rgb(58 110 165)',
    shade1: 'rgb(255 255 255)',
    shade2: 'rgb(212 208 200)',
    shade3: 'rgb(212 208 200)',
    shade4: 'rgb(128 128 128)',
    shade5: 'rgb(0 0 0)',
    text: 'rgb(0 0 0)',
    textDisabled: 'rgb(128 128 128)',
    windowActiveBackground: generateTitleGradient(
      'rgb(10 36 106)',
      'rgb(166 202 240)'
    ),
    windowPassiveBackground: generateTitleGradient(
      'rgb(120 124 120)',
      'rgb(176 176 176)'
    ),
    windowTitleText: 'rgb(255 255 255)',
  },
});

export default theme;
