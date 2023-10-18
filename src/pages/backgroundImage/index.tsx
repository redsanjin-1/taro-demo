import { PropsWithChildren } from 'react';
import { View, Image } from '@tarojs/components';
import './index.less';

export interface Props {
  src: any;
  mode?: any;
  className?: string;
}

export const BackgroundImage = (props: PropsWithChildren<Props>) => {
  const { src, children, mode = 'aspectFill' } = props;

  return (
    <View className={`bg-img`}>
      <Image src={src} mode={mode} className="bg-img__bg"></Image>
      {children}
    </View>
  );
};

export default BackgroundImage;
