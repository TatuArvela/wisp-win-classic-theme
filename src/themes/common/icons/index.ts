import { Icon, IconsThemeSection } from '@tatuarvela/wisp';

import throbberActive from './throbber-active.gif';
import throbberPassive from './throbber-passive.png';
import wispWinIcon from './wisp-win.png';

const wisp: Icon = {
  48: wispWinIcon,
};

const error: Icon = {};

const warning: Icon = {};

const menuBarThrobber: Icon = {
  48: throbberPassive,
};

const menuBarThrobberActive: Icon = {
  48: throbberActive,
};

const icons: Partial<IconsThemeSection> = {
  menuBarThrobber,
  menuBarThrobberActive,
  wisp,
} as const;

export default icons;
