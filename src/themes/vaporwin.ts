import { themeBuilder } from './common/themeBuilder';

const theme = themeBuilder({
  id: 'vaporwin',
  name: 'ウィンドウズ',
  themeVariables: {
    active: 'rgb(10, 36, 106)',
    passive: 'rgb(164, 81, 123)',
    background: 'url("https://i.redd.it/k4o8nz5vfiyy.gif")',
    shade1: 'rgb(255, 255, 255)',
    shade2: 'rgb(253, 181, 218)',
    shade3: 'rgb(253, 181, 218)',
    shade4: 'rgb(164, 81, 123)',
    shade5: 'rgb(164, 81, 123)',
    text: 'rgb(164, 81, 123)',
    textDisabled: 'rgb(164, 81, 123)',
    windowActiveBackground:
      'linear-gradient(90deg, #ff6ad5, #c774e8, #ad8cff, #8795e8, #94d0ff)',
    windowPassiveBackground: 'gray',
    windowTitleText: 'rgb(255, 255, 255)',
  },
});

export default theme;
