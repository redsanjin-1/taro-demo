import { View } from '@tarojs/components';
import { useState } from 'react';
import { Slider } from './Slider';
import './index.less';

const Index = () => {
  const [value, setValue] = useState(0);

  return (
    <View className="container">
      <View>value === {value}</View>
      <Slider
        value={value}
        onChange={(e) => {
          setValue(e);
        }}
      ></Slider>
    </View>
  );
};
export default Index;
