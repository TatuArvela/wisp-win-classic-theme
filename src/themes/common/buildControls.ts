import { css } from 'styled-components';

import { ThemeBuilderConfig, ThemeVariables } from './types';
import { generateSharedButtonStyles } from './utils';

const buildButton = (themeVariables: ThemeVariables) => css`
  ${generateSharedButtonStyles(themeVariables)}

  border-radius: 0;
  font-size: 11px;
  padding: 2px;
  user-select: none;
`;

const buildControls = (
  themeVariables: ThemeVariables
): ThemeBuilderConfig['controls'] => ({
  Button: buildButton(themeVariables),
});

export default buildControls;
