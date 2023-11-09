import { View, ScrollView } from '@tarojs/components';
import { navigateTo } from '@tarojs/taro';
import { NavBar } from './NavBar';
import './index.less';

const Info = () => {
  const toMain = () => {
    navigateTo({
      url: '/pages/main/index',
    });
  };

  return (
    <View className="info">
      <View className="info__header">
        <NavBar
          title="我的胜多负少打发斯"
          theme="dark"
          showLeft={false}
        ></NavBar>
        <View className="info__header__body" onClick={toMain}>
          hhhhh
        </View>
      </View>
      <View className="info__body">
        <ScrollView scrollY style={{ height: '100%' }}>
          <View className="info__item">item</View>
          <View className="info__item">item</View>
          <View className="info__item">item</View>
          <View className="info__item">item</View>
          <View className="info__item">item</View>
          <View className="info__item">item</View>
          <View className="info__item">item</View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Info;
