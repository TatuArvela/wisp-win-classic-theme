import {
  CheckboxProps,
  ControlWrapperProps,
  LabelProps,
} from '@tatuarvela/wisp';
import { css } from 'styled-components';

import check from './check.png';
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

const buildCheckboxWrapper = () => {
  const inlineStyle = css`
    align-items: center;
  `;

  return css`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    gap: 8px;
    padding: 2px;

    ${(props: ControlWrapperProps) => props.inlineLabel && inlineStyle}
  `;
};

const buildCheckbox = (themeVariables: ThemeVariables) => {
  const checkedStyle = css`
    &:before {
      content: '';
      background-image: url('${check}');
      width: 7px;
      height: 7px;
      position: absolute;
      top: 1px;
      left: 1px;
    }
  `;

  return css<CheckboxProps>`
    ${generateActiveLoweredStyles(themeVariables)}
    box-sizing: border-box;
    height: 11px;
    width: 11px;
    position: relative;

    ${(props) => props.checked && checkedStyle}
  `;
};

const buildLabel = () => css<LabelProps>`
  color: ${(props) => (props.disabled ? 'gray' : 'black')};
  font-size: 12px;
  font-family: sans-serif;
  margin: 0;
`;

const buildControls = (
  themeVariables: ThemeVariables
): ThemeBuilderConfig['controls'] => ({
  AddressBar: buildAddressBar(),
  AddressBarInput: buildAddressBarInput(themeVariables),
  Button: buildButton(themeVariables),
  CheckboxWrapper: buildCheckboxWrapper(),
  Checkbox: buildCheckbox(themeVariables),
  Label: buildLabel(),
});

export default buildControls;
