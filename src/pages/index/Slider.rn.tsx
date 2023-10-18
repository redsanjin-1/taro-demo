import { pxTransform } from '@tarojs/taro';
import gauge_bg_scale from '@/assets/gauge_bg_scale.png';
import btn_gauge_on from '@/assets/btn_gauge_on.png';
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { StyleSheet, View, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}
const styles = StyleSheet.create({
  slider: {
    position: 'absolute',
    width: pxTransform(375),
    height: pxTransform(68),
  },
  sliderBg: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  sliderThumb: {
    position: 'absolute',
    left: 0,
    top: pxTransform(10),
  },
  sliderThumbImage: {
    width: pxTransform(48),
    height: pxTransform(48),
  },
});

export const Slider = (props: SliderProps) => {
  const { value, onChange } = props;
  // 375为slider的px宽度，需要转换成dp
  const sliderWidth = Number(pxTransform(375));
  // 每个刻度对应的，left属性dp值
  const leftArray = [
    pxTransform(-2),
    pxTransform(31),
    pxTransform(66),
    pxTransform(100),
    pxTransform(133),
    pxTransform(166),
    pxTransform(198),
    pxTransform(230),
    pxTransform(268),
    pxTransform(300),
    pxTransform(332),
  ];
  const left = useSharedValue(leftArray[value]);
  // x为相对容器的x坐标, 单位为dp
  const changeValue = (x: number) => {
    // 0-10 一共11段区间
    let newVal = Math.floor((x * 11) / sliderWidth);
    // 处理边界
    if (newVal < 0) {
      newVal = 0;
    }
    if (newVal > 10) {
      newVal = 10;
    }
    if (value !== newVal) {
      console.log('x', x);
      console.log('newVal', newVal);
      left.value = leftArray[newVal];
      onChange(newVal);
    }
  };

  const Pan = Gesture.Pan()
    .runOnJS(true)
    // .shouldCancelWhenOutside(true)
    .onUpdate((e) => changeValue(e.x));

  const Tap = Gesture.Tap()
    .runOnJS(true)
    .onEnd((e) => changeValue(e.x));

  const compose = Gesture.Race(Tap, Pan);

  const animatedStyle = useAnimatedStyle(() => ({
    left: left.value,
  }));

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={compose}>
        <View style={styles.slider}>
          <Image style={styles.sliderBg} source={gauge_bg_scale}></Image>
          <Animated.View style={[styles.sliderThumb, animatedStyle]}>
            <Image
              style={styles.sliderThumbImage}
              source={btn_gauge_on}
            ></Image>
          </Animated.View>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};
