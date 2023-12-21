import { Icon, IconsThemeSection } from '@tatuarvela/wisp';

import wispWinIcon from './wisp-win.png';

const wisp: Icon = {
  48: wispWinIcon,
};

const icons: Partial<IconsThemeSection> = {
  wisp,
} as const;

export default icons;
