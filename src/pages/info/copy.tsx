import { useState } from 'react';
import { View } from '@tarojs/components';
import { ScrollView, StyleSheet, PixelRatio } from 'react-native';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  // withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import './index.less';

const Info = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = (e) => {
    setScrollTop(e.nativeEvent.contentOffset.y);
  };

  const ratio = PixelRatio.get();
  const max = 800 / ratio;
  const min = 200 / ratio;
  const top = useSharedValue(max);
  const animatedStyle = useAnimatedStyle(() => ({
    top: top.value,
  }));
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const Pan = Gesture.Pan()
    .runOnJS(true)
    .onUpdate((e) => {
      const { translationY } = e;
      // 向下滑
      if (translationY > 0) {
        if (scrollTop > 0) {
          return;
        }
        const newTop = Math.min(max, top.value + translationY / 8);
        top.value = newTop;
      } else {
        const newTop = Math.max(min, top.value + translationY / 8);
        top.value = newTop;
        setScrollEnabled(newTop === min);
      }
    });

  const scroll = Gesture.Native().simultaneousWithExternalGesture(Pan);

  return (
    <GestureHandlerRootView>
      <View className="info">
        <View className="banner"></View>
        <GestureDetector gesture={Pan}>
          <Animated.View style={[styles.container, animatedStyle]}>
            <GestureDetector gesture={scroll}>
              <ScrollView
                onScroll={onScroll}
                style={{ height: '100%' }}
                scrollEnabled={scrollEnabled}
              >
                <View className="item">1</View>
                <View className="item">2</View>
                <View className="item">3</View>
                <View className="item">4</View>
                <View className="item">5</View>
                <View className="item">6</View>
                <View className="item">7</View>
                <View className="item">8</View>
                <View className="item">9</View>
                <View className="item">10</View>
              </ScrollView>
            </GestureDetector>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 2,
    overflow: 'hidden',
  },
});

export default Info;
