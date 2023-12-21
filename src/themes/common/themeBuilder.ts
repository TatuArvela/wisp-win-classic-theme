import buildControls from './buildControls';
import buildElements from './buildElements';
import buildWindow from './buildWindow';
import { ThemeBuilderConfig } from './types';

export const themeBuilder = <T extends string>({
  id,
  name,
  themeVariables,
  controls,
  elements,
  window,
}: ThemeBuilderConfig<T>) => ({
  id,
  name,
  controls: Object.assign({}, buildControls(themeVariables), controls),
  elements: Object.assign({}, buildElements(themeVariables), elements),
  window: Object.assign({}, buildWindow(themeVariables), window),
});
