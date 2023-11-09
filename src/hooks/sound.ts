import { useEffect, useState } from 'react';
import { Audio, AVPlaybackSource } from 'expo-av';

export const useSound = (source: AVPlaybackSource) => {
  const [sound, setSound] = useState<any>();

  const playSound = async () => {
    if (!source) return;
    const { sound: playBackObj } = await Audio.Sound.createAsync(source);

    // console.log('playBackObj', playBackObj);
    setSound(playBackObj);
    await sound?.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('unloading sound');
          sound?.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return {
    sound,
    playSound,
  };
};
