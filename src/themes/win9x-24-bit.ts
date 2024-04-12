import generateTitleGradient from './common/generateTitleGradient';
import { themeBuilder } from './common/themeBuilder';

const theme = themeBuilder({
  id: 'win9x-24-bit',
  name: 'Windows 9x, True Color 24-bit',
  themeVariables: {
    active: 'rgb(0 0 128)',
    passive: 'rgb(128 128 128)',
    background: 'rgb(0 128 128)',
    shade1: 'rgb(255 255 255)',
    shade2: 'rgb(223 223 223)',
    shade3: 'rgb(192 192 192)',
    shade4: 'rgb(128 128 128)',
    shade5: 'rgb(0 0 0)',
    text: 'rgb(0 0 0)',
    textDisabled: 'rgb(128 128 128)',
    windowActiveBackground: generateTitleGradient(
      'rgb(0 0 128)',
      'rgb(16 132 208)'
    ),
    windowPassiveBackground: generateTitleGradient(
      'rgb(128 128 128)',
      'rgb(181 181 181)'
    ),
    windowTitleText: 'rgb(255 255 255)',
  },
});

export default theme;
