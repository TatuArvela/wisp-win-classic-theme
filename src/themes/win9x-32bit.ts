import { themeBuilder } from './common/themeBuilder';

const theme = themeBuilder({
  id: 'win9x-32bit',
  name: 'Windows 9x, True Color 32-bit',
  themeVariables: {
    active: 'rgb(0,0,120)',
    background: 'rgb(0,128,128)',
    shade1: 'rgb(255,255,255)',
    shade2: 'rgb(223,223,223)',
    shade3: 'rgb(192,192,192)',
    shade4: 'rgb(128,128,128)',
    shade5: 'rgb(0,0,0)',
    text: 'rgb(0,0,0)',
    windowActiveBackground:
      'linear-gradient(90deg, rgb(0,0,128), rgb(16,132,208))',
    windowPassiveBackground:
      'linear-gradient(90deg, rgb(120,124,120), rgb(176,176,176))',
    windowTitleText: 'rgb(247, 251, 247)',
  },
});

export default theme;
