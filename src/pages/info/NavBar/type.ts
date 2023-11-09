import { ReactElement } from 'react';

export interface NavBarProps {
  title: string;
  showLeft?: boolean;
  left?: ReactElement;
  right?: ReactElement;
  onClickLeft?: () => void;
  // light - 白底黑字
  // dark  - 透明底白字
  theme?: 'light' | 'dark';
}
