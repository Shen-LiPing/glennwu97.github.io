const ap = new APlayer({
  container: document.getElementById('aplayer'),
  autoplay: false,
 narrow: true, 
  //mini: true,
  fixed: true,
  width: '',
  volume: 0.7,
  mutex: true,
  loop: 'all',
  preload: 'auto', 
  theme: '#e9e9e9',
  audio: [
      {
          name: 'Shelter (Piano version)',
          artist: 'Porter Robinson / Madeon',
          url: 'https://music.163.com/#/song?id=427606780.mp3',
          cover: 'https://p2.music.126.net/nEaSbkg_Cn8gN9vLoSz0gQ==/18494885092595843.jpg',
          lrc: ""
      } 
  ]
});



