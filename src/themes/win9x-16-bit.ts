import generateTitleGradient from './common/generateTitleGradient';
import { themeBuilder } from './common/themeBuilder';

const theme = themeBuilder({
  id: 'win9x-16-bit',
  name: 'Windows 9x, High Color 16-bit',
  themeVariables: {
    active: 'rgb(0 0 120)',
    passive: 'rgb(120 124 120)',
    background: 'rgb(0 124 120)',
    shade1: 'rgb(248 252 248)',
    shade2: 'rgb(216  220  216)',
    shade3: 'rgb(184 188 184)',
    shade4: 'rgb(120 124 120)',
    shade5: 'rgb(0 0 0)',
    text: 'rgb(0 0 0)',
    textDisabled: 'rgb(120 124 120)',
    windowActiveBackground: generateTitleGradient(
      'rgb(0 0 120)',
      'rgb(8 128 200)'
    ),
    windowPassiveBackground: generateTitleGradient(
      'rgb(120 124 120)',
      'rgb(176 176 176)'
    ),
    windowTitleText: 'rgb(248 252 248)',
  },
});

export default theme;
