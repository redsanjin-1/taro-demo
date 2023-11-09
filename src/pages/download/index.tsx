import { useEffect, useState } from 'react';
import { View, Button, Progress } from '@tarojs/components';
import * as FileSystem from 'expo-file-system';
import { DownloadPauseState, DownloadResumable } from 'expo-file-system';
import { useMMKVObject, useMMKVNumber } from 'react-native-mmkv';
import { downloadFile } from '@tarojs/taro';
import './index.less';

export const Download = () => {
  // const [progress, setProgress] = useMMKVNumber('local-progress');
  const [progress, setProgress] = useState(0);
  const [downloadResumable, setDownloadResumable] =
    useState<DownloadResumable>();

  const [downloadSnapshotJson, setDownloadSnapshotJson] =
    useMMKVObject<DownloadPauseState>('remote-pdf');

  useEffect(() => {
    // setProgress(0);
    // setDownloadSnapshotJson(undefined);
    // console.log('downloadSnapshotJson', downloadSnapshotJson);
    return () => {
      // 正在未下载完，页面关闭，保存数据
      // if ((progress || 0) > 0) {
      //   setDownloadSnapshotJson(downloadResumable?.savable());
      // }
      console.log('unload');
    };
  }, []);

  const onDownload = async () => {
    // try {
    //   // 本地有缓存数据
    //   if (downloadSnapshotJson?.url) {
    //     console.log('2');
    //     let instance = new FileSystem.DownloadResumable(
    //       downloadSnapshotJson.url,
    //       downloadSnapshotJson.fileUri,
    //       downloadSnapshotJson.options,
    //       (downloadProgress) => {
    //         const newProgress =
    //           downloadProgress.totalBytesWritten /
    //           downloadProgress.totalBytesExpectedToWrite;
    //         // console.log('downloadResumable', downloadResumable);
    //         console.log('newProgress', newProgress);
    //         setProgress(newProgress);
    //       },
    //       downloadSnapshotJson.resumeData
    //     );
    //     console.log('instance', instance);
    //     setDownloadResumable(instance);

    //     const res = await instance.resumeAsync();
    //     console.log('Finished downloading to ', res?.uri);
    //   } else {
    //     console.log('1');
    //     // 第一次请求数据
    //     const instance = FileSystem.createDownloadResumable(
    //       'https://github.com/redsanjin-1/static/raw/main/Vue.js-design.pdf',
    //       FileSystem.documentDirectory + 'Vue.js-design.pdf',
    //       {},
    //       (downloadProgress) => {
    //         const newProgress =
    //           downloadProgress.totalBytesWritten /
    //           downloadProgress.totalBytesExpectedToWrite;
    //         // console.log('downloadResumable', downloadResumable);
    //         console.log('newProgress', newProgress);
    //         setProgress(newProgress);
    //       }
    //     );
    //     console.log('instance', instance);
    //     setDownloadResumable(instance);
    //     const res = await instance.downloadAsync();
    //     console.log('Finished downloading to ', res?.uri);
    //   }
    // } catch (e) {
    //   console.error(e);
    // }
    const downloadTask = downloadFile({
      // url: 'https://cdn-5217.allflow.com.cn/oss/f948d730-8e07-4307-bc17-69e05c63b581/Vue.js%25E8%25AE%25BE%25E8%25AE%25A1%25E4%25B8%258E%25E5%25AE%259E%25E7%258E%25B0.pdf?filename=Vue.js%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0.pdf&time=1698594300&token=4ba6acabe232cd9b9a17871c17ab88fe&role=sharePaid',
      url: 'https://down10.zol.com.cn/pdftools/PDFEDITOR_2.0.6.6_zol.exe',
      success(res) {
        console.log('download res', res);
      },
    });

    downloadTask.onProgressUpdate((res) => {
      console.log('下载进度', res.progress);
      console.log('已经下载的数据长度', res.totalBytesWritten);
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
      setProgress(res.progress);
    });
  };

  const onStop = async () => {
    console.log('stop', downloadResumable);
    try {
      await downloadResumable?.pauseAsync();
      console.log('stop downloading');
      setDownloadSnapshotJson(downloadResumable?.savable());
    } catch (error) {
      console.log('pauseAsync error', error);
    }
  };

  return (
    <View className="download">
      <Button className="download-btn" onClick={onDownload}>
        download
      </Button>
      <Button onClick={onStop}>stop</Button>
      {/* <View>{Math.round((progress || 0) * 100)}</View> */}

      <Progress
        percent={progress}
        showInfo
        strokeWidth={2}
        active
        activeColor="blue"
      ></Progress>
    </View>
  );
};
