import { Theme } from '@tatuarvela/wisp';

type Color = string;

export interface ThemeVariables {
  active: Color;
  passive: Color;
  background: Color;
  shade1: Color;
  shade2: Color;
  shade3: Color;
  shade4: Color;
  shade5: Color;
  text: Color;
  textDisabled: Color;
  windowActiveBackground: Color;
  windowPassiveBackground: Color;
  windowTitleText: Color;
}

export type ThemeBuilderConfig<T extends string = string> = {
  controls?: Theme['controls'];
  elements?: Theme['elements'];
  id: T;
  name: string;
  themeVariables: ThemeVariables;
  window?: Theme['window'];
};
