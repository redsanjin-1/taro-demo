import { View } from '@tarojs/components';
import { isRepeatClick } from '../../utils/index';
import { NavBar } from '../info/NavBar';

const Main = () => {
  const clickFn = () => {
    if (isRepeatClick('click')) return;
    console.log('click');
  };

  const fuck = () => {
    if (isRepeatClick('fuck')) return;
    console.log('fuck');
  };

  const renderRight = () => <View>test hello</View>;

  return (
    <View style={{ backgroundColor: 'green' }}>
      <NavBar title="测试页" right={renderRight()}></NavBar>

      <View onClick={clickFn}>click me</View>

      <View style={{ marginTop: 200 }} onClick={fuck}>
        tap me
      </View>
    </View>
  );
};

export default Main;
