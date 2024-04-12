import { themeBuilder } from './common/themeBuilder';

const theme = themeBuilder({
  id: 'win9x-16-colors',
  name: 'Windows 9x, 16 colors',
  themeVariables: {
    active: 'rgb(0 0 168)',
    passive: 'rgb(135 136 143)',
    background: 'rgb(87 168 168)',
    shade1: 'rgb(255 255 255)',
    shade2: 'rgb(192 199 200)',
    shade3: 'rgb(192 199 200)',
    shade4: 'rgb(135 136 143)',
    shade5: 'rgb(0 0 0)',
    text: 'rgb(0 0 0)',
    textDisabled: 'rgb(135 136 143)',
    windowActiveBackground: 'rgb(0 0 168)',
    windowPassiveBackground: 'rgb(135 136 143)',
    windowTitleText: 'rgb(255 255 255)',
  },
});

export default theme;
