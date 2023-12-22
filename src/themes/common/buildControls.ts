import { css } from 'styled-components';

import { ThemeBuilderConfig, ThemeVariables } from './types';
import {
  generateActiveLoweredStyles,
  generateSharedButtonStyles,
} from './utils';

const buildAddressBar = () => css`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-family: sans-serif;
  font-size: 12px;
  gap: 4px;
  padding: 2px;
`;

const buildAddressBarInput = (themeVariables: ThemeVariables) => css`
  ${generateActiveLoweredStyles(themeVariables)}

  outline: none;
  width: 100%;
  flex-grow: 1;
  font-size: 12px;
`;

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
  AddressBar: buildAddressBar(),
  AddressBarInput: buildAddressBarInput(themeVariables),
  Button: buildButton(themeVariables),
});

export default buildControls;
