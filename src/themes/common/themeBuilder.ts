import icons from '../../icons';
import buildControls from './controls/buildControls';
import buildElements from './elements/buildElements';
import { ThemeBuilderConfig } from './types';
import buildWindow from './window/buildWindow';

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
  icons: icons,
});
