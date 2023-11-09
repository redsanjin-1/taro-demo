import { Component, PropsWithChildren } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import 'rn-overlay';
import './app.less';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
class App extends Component<PropsWithChildren> {
  componentDidMount() {
    this.init();
  }

  componentDidShow() {}

  componentDidHide() {}

  async init() {
    // console.log('init');
    // setTimeout(() => {
    console.log('hide');
    SplashScreen.hideAsync();
    // }, 2000);
  }

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
