// import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { navigateTo } from '@tarojs/taro';
// import { Slider } from './Slider';
// import { useSound } from '../../hooks/sound';
// import { isRepeatClick } from '../../utils/index';

// import { downloadFile } from '@tarojs/taro';
// import * as fs from 'expo-file-system';
// import { unzip } from 'react-native-zip-archive';
// import {
//   useMMKVString,
//   useMMKVNumber,
//   useMMKVBoolean,
// } from 'react-native-mmkv';
import LottieView from 'lottie-react-native';
import { useState, useRef, useEffect } from 'react';
import { Download } from '../download';

const Index = () => {
  // const [value, setValue] = useState(9);
  // const { playSound } = useSound(require('../../assets/13373.mp3'));

  // const clickFn = () => {
  //   if (isRepeatClick()) return;
  //   console.log('fuck');
  //   playSound();
  // };
  // const downloadPdf = () => {
  //   downloadFile({
  //     // url: 'https://github.com/redsanjin-1/static/raw/main/Vue.js-design.pdf',
  //     url: 'https://github.com/redsanjin-1/static/raw/main/test-zip.zip',
  //     success: (res) => {
  //       console.log('success', res);
  //       const tempFilePath = res.tempFilePath;
  //       console.log('tempFilePath', tempFilePath);

  //       unzip(tempFilePath, fs.documentDirectory + '', 'UTF-8')
  //         .then((path) => {
  //           console.log(`unzip completed at ${path}`);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     },
  //     fail: (err) => {
  //       console.log('fail', err);
  //     },
  //   });
  // };

  // const read = () => {
  //   fs.readDirectoryAsync(fs.documentDirectory + 'test-zip/').then((res) => {
  //     console.log('dir', res);
  //   });
  // };
  // const [username, setUsername] = useMMKVString('user.name');
  // const [age, setAge] = useMMKVNumber('user.age');
  // const [isPremiumUser, setIsPremiumUser] = useMMKVBoolean('user.isPremium');

  // const initUser = () => {
  //   setUsername('sanjin');
  //   setAge(29);
  //   setIsPremiumUser(true);
  // };

  const animationRef = useRef<LottieView>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    animationRef.current?.reset();
    animationRef.current?.play();
    // }, 0);
  }, [show]);

  return (
    <View style={styles.container}>
      {/* <Text onPress={clickFn}>value --- {value}</Text>
      <Slider
        value={value}
        onChange={(e) => {
          console.log('change', e);

          setValue(e);
        }}
      ></Slider>
      <Text
        style={styles.router}
        onPress={() => {
          navigateTo({ url: 'pages/main/index' });
        }}
      >
        go to main
      </Text> */}
      {/* <Text style={styles.router} onPress={downloadPdf}>
        download zip
      </Text>

      <Text onPress={read}> read </Text> */}
      {/* <Text style={styles.router}>
        <View>
          <Text>{'username---' + username}</Text>
        </View>
        <View>
          <Text>{'age---' + age}</Text>
        </View>
        <View>
          <Text>{'isPremiumUser---' + isPremiumUser}</Text>
        </View>
      </Text>
      <Text onPress={initUser}>initUser</Text> */}

      {/* <Text onPress={() => setShow(true)}>show lottie</Text>
      {show && (
        <LottieView
          source={require('../../utils/cmn_ui_dice_1.json')}
          autoPlay={false}
          loop={false}
          style={{ width: 200, height: 200 }}
          ref={animationRef}
          onAnimationFinish={() => {
            console.log('close');
            setShow(false);
          }}
        ></LottieView>
      )} */}
      <Download></Download>
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
    backgroundColor: 'red',
  },
  router: {
    marginTop: 200,
    width: 200,
    height: 100,
    backgroundColor: 'red',
  },
});
export default Index;
