import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const VID_CURRENT_WATCHING_TIME = 'where-you-left';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlay = function (data) {
  localStorage.setItem(VID_CURRENT_WATCHING_TIME, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const storedTime = localStorage.getItem(VID_CURRENT_WATCHING_TIME);
if (storedTime) {
  player.setCurrentTime(JSON.parse(storedTime));
} else {
  console.log('No stored playback time found.');
}
