import VimeoPlayer from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

// const onTimeUpdate = function (data) {
//   duration: 61.857;
//   percent: 0.049;
//   seconds: 3.034;
// };

// player.on('timeUpdate', onTimeUpdate);

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

player.on('timeupdate', function (data) {
  console.log('Current time:', data.seconds);
  savePlaybackTime();
});
restorePlaybackTime();
