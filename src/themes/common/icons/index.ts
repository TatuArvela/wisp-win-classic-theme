import { Icon, IconsThemeSection } from '@tatuarvela/wisp';

import alertIcon from './alert.png';
import errorIcon from './error.png';
import throbberActive from './throbber-active.gif';
import throbberPassive from './throbber-passive.png';
import wispWinIcon from './wisp-win.png';

const wisp: Icon = {
  48: wispWinIcon,
};

const error: Icon = {
  32: errorIcon,
};

const warning: Icon = {
  32: alertIcon,
};

const menuBarThrobber: Icon = {
  22: throbberPassive,
};

const menuBarThrobberActive: Icon = {
  22: throbberActive,
};

const icons: Partial<IconsThemeSection> = {
  error,
  warning,
  menuBarThrobber,
  menuBarThrobberActive,
  wisp,
} as const;

export default icons;
