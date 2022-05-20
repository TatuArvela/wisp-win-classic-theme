import { themeBuilder } from './common/themeBuilder';

const theme = themeBuilder({
  id: 'win9x-256clr',
  name: 'Windows 9x, 256 colors',
  themeVariables: {
    active: 'rgb(0,0,128)',
    background: 'rgb(0,128,128)',
    shade1: 'rgb(255,255,255)',
    shade2: 'rgb(192,192,192)',
    shade3: 'rgb(192,192,192)',
    shade4: 'rgb(128,128,128)',
    shade5: 'rgb(0,0,0)',
    text: 'rgb(0,0,0)',
    windowActiveBackground: 'rgb(0,0,128)',
    windowPassiveBackground: 'rgb(128,128,128)',
    windowTitleText: 'rgb(247, 251, 247)',
  },
});

export default theme;
