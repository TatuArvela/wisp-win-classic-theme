import { Theme } from '@tatuarvela/wisp';

type Color = string;

export interface ThemeVariables {
  active: Color;
  background: Color;
  shade1: Color;
  shade2: Color;
  shade3: Color;
  shade4: Color;
  shade5: Color;
  text: Color;
  windowActiveBackground: Color;
  windowPassiveBackground: Color;
  windowTitleText: Color;
}

export interface ThemeBuilderConfig {
  themeVariables: ThemeVariables;
  controls?: Theme['controls'];
  elements?: Theme['elements'];
  id: string;
  name: string;
  window?: Theme['window'];
}
