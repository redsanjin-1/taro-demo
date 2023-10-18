import { View, Image } from '@tarojs/components';
import gauge_bg_scale from '@/assets/gauge_bg_scale.png';
import btn_gauge_on from '@/assets/btn_gauge_on.png';
import './index.less';
import { pxTransform } from '@tarojs/taro';

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

export const Slider = (props: SliderProps) => {
  // const { value, onChange } = props;
  const leftMap = [0, 31, 63, 97, 130, 163, 196, 229, 263, 295, 328];
  const left = pxTransform(196);

  return (
    <View className="container">
      <View className="slider">
        <Image className="slider-bg" src={gauge_bg_scale}></Image>
        <Image
          className="slider-thumb"
          src={btn_gauge_on}
          style={{ left }}
        ></Image>
      </View>
    </View>
  );
};
