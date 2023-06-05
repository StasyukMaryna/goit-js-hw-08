import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function savePlaybackTime() {
  player.getCurrentTime().then(function (time) {
    localStorage.setItem('videoplayer-current-time', time);
  });
}

function restorePlaybackTime() {
  const playbackTime = localStorage.getItem('videoplayer-current-time');
  if (playbackTime) {
    player.setCurrentTime(parseFloat(playbackTime));
  }
}

player.on('timeupdate', throttle(savePlaybackTime, 1000));
restorePlaybackTime();
