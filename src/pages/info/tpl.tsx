import { View, PickerView, PickerViewColumn } from '@tarojs/components';
// import { Picker, PickerColumn, PickerItem } from '../picker';
import { Overlay } from 'react-native';
import './index.less';
import { useState } from 'react';
import { pxTransform } from '@tarojs/taro';

const Info = () => {
  const [val, setVal] = useState([0]);
  const list = [
    {
      label: 'sanjin',
      value: 'sanjin',
    },
    {
      label: 'gz',
      value: 'gz',
    },
    {
      label: 'hz',
      value: 'hz',
    },
  ];
  const onChange = ({ detail }) => {
    console.log('onChange', detail);
    setVal(detail.value);
  };
  const indicatorStyle: any = {
    display: 'none',
    height: pxTransform(50),
    backgroundColor: 'red',
  };

  return (
    <View className="info">
      <View className="info-picker">
        <View>hello</View>
        {/* <PickerView
          indicatorStyle={indicatorStyle}
          value={val}
          onChange={onChange}
        >
          <PickerViewColumn>
            {list.map((item) => (
              <View className="info-picker__item" key={item.value}>
                {item.label}
              </View>
            ))}
          </PickerViewColumn>
        </PickerView> */}
        <Picker>
          <PickerColumn>
            <PickerItem label="Monday" value="Monday" />
            <PickerItem label="Tuesday" value="Tuesday" />
            <PickerItem label="Wednesday" value="Wednesday" />
            <PickerItem label="Thursday" value="Thursday" />
            <PickerItem label="Friday" value="Friday" />
          </PickerColumn>
        </Picker>
        <View>world</View>
      </View>
    </View>
  );
};

export default Info;
