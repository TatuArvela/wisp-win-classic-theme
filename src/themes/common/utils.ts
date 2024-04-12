import { css } from 'styled-components';

import generateBorders from './generateBorders';
import { ThemeVariables } from './types';

export const fontFamily = "'Microsoft Sans Serif', sans-serif;";

// FIXME
export const generateGroovedStyles = (themeVariables: ThemeVariables) => css`
  border: 1px solid ${themeVariables.shade4};
  box-shadow:
    inset 1px 1px 0 0 ${themeVariables.shade1},
    0 1px 0 0 ${themeVariables.shade1},
    1px 0 0 0 ${themeVariables.shade1},
    1px 1px 0 0 ${themeVariables.shade1};
`;

export const generateIndentedStyles = (themeVariables: ThemeVariables) => css`
  box-shadow: ${generateBorders(
      1,
      themeVariables.shade4,
      themeVariables.shade1
    )},
    ${generateBorders(2, themeVariables.shade5, themeVariables.shade2)};
`;

export const generateButtonStyles = (themeVariables: ThemeVariables) => {
  const activeStyles = css`
    box-shadow: ${generateBorders(
        1,
        themeVariables.shade5,
        themeVariables.shade5
      )},
      ${generateBorders(2, themeVariables.shade4, themeVariables.shade4)};

    > * {
      display: inline-block;
      position: relative;
      left: 1px;
      top: 1px;
    }
  `;

  const focusStyles = css`
    box-shadow:
      ${generateBorders(1, themeVariables.shade5, themeVariables.shade5)},
      inset -2px -2px ${themeVariables.shade5},
      inset 2px 2px ${themeVariables.shade1},
      inset -3px -3px ${themeVariables.shade4};
  `;

  return css`
    background: ${themeVariables.shade3};
    border: none;

    box-shadow: ${generateBorders(
        1,
        themeVariables.shade1,
        themeVariables.shade5
      )},
      ${generateBorders(2, 'transparent', themeVariables.shade4)};

    &:focus {
      ${focusStyles}
    }

    ${(props) =>
      (props as unknown as { active?: boolean })?.active && activeStyles};
    &:active {
      ${activeStyles}
    }
  `;
};

export const generateSmallButtonStyles = (themeVariables: ThemeVariables) => {
  const activeStyles = css`
    box-shadow: ${generateBorders(
        1,
        themeVariables.shade4,
        themeVariables.shade4
      )},
      ${generateBorders(2, themeVariables.shade3, themeVariables.shade2)};

    > * {
      position: relative;
      left: 1px;
      top: 1px;
    }
  `;

  return css`
    background: ${themeVariables.shade3};
    border: none;

    box-shadow: ${generateBorders(
        1,
        themeVariables.shade2,
        themeVariables.shade5
      )},
      ${generateBorders(2, themeVariables.shade1, themeVariables.shade4)};

    ${(props) =>
      (props as unknown as { active?: boolean })?.active && activeStyles};
    &:active {
      ${activeStyles}
    }
  `;
};
