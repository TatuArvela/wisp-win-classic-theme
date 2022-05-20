import buildControls from './buildControls';
import buildElements from './buildElements';
import buildWindow from './buildWindow';
import { ThemeBuilderConfig } from './types';

export const themeBuilder = ({
  id,
  name,
  themeVariables,
  controls,
  elements,
  window,
}: ThemeBuilderConfig) => ({
  id: id,
  name: name,
  controls: Object.assign({}, buildControls(themeVariables), controls),
  elements: Object.assign({}, buildElements(themeVariables), elements),
  window: Object.assign({}, buildWindow(themeVariables), window),
});
