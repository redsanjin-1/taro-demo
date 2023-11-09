import { View } from '@tarojs/components';
import { getSystemInfoSync, navigateBack } from '@tarojs/taro';
import GrayBack from '@/assets/back-gray.png';
import WhiteBack from '@/assets/back-white.png';
import { BackgroundImage } from '../../backgroundImage';
import { NavBarProps } from './type';
import './index.less';

export const NavBar = (props: NavBarProps) => {
  const {
    title,
    showLeft = true,
    left,
    right,
    theme = 'light',
    onClickLeft,
  } = props;
  const info = getSystemInfoSync();

  const defaultLeftIcon = () => (
    <View className="nav-bar__left--default">
      <BackgroundImage
        src={theme === 'light' ? GrayBack : WhiteBack}
      ></BackgroundImage>
    </View>
  );

  const onLeft = () => {
    if (!showLeft) return;

    if (onClickLeft) {
      onClickLeft();
    } else {
      navigateBack();
    }
  };

  return (
    <View
      className={`nav-bar nav-bar--${theme}`}
      style={{ marginTop: info.safeArea?.top }}
    >
      <View
        className="nav-bar__left"
        style={{ opacity: showLeft ? 1 : 0 }}
        onClick={onLeft}
      >
        {left || defaultLeftIcon()}
      </View>
      <View className={`nav-bar__title nav-bar__title--${theme}`}>{title}</View>
      <View className="nav-bar__right">{right}</View>
    </View>
  );
};
