import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Slider } from './Slider';
import { useSound } from '../../hooks/sound';

const Index = () => {
  const [value, setValue] = useState(9);
  const { playSound } = useSound(require('../../assets/13373.mp3'));

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          playSound();
        }}
      >
        value --- {value}
      </Text>
      <Slider
        value={value}
        onChange={(e) => {
          console.log('change', e);

          setValue(e);
        }}
      ></Slider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    paddingTop: 200,
    paddingBottom: 200,
    paddingLeft: 80,
    // paddingRight: 50,
    backgroundColor: 'blue',
  },
});
export default Index;
