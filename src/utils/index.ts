// 重复点击事件时间戳表
const DOUBLE_CLICK_TIME_MAP = {
  default: 0,
};
/**
 * 是否为重复点击事件
 * @param type {string} 点击事件类型，默认'default'
 * @param duration {number} 这个时间内，认定为重复时间，默认2000
 */
export const isRepeatClick = (
  type: string = 'default',
  duration: number = 2000
): boolean => {
  let currentTime = Date.now();
  let timeInterval = currentTime - (DOUBLE_CLICK_TIME_MAP[type] || 0);
  if (0 < timeInterval && timeInterval < duration) {
    return true; //如果间隔在0-2秒内就是快速重复点击
  }
  DOUBLE_CLICK_TIME_MAP[type] = currentTime;
  return false;
};
