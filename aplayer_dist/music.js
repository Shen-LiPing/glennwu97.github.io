// const ap = new APlayer({
//     container: document.getElementById('aplayer'),
//     fixed: true,
//    //narrow: true,
//    // autoplay: false,  //吸盘模式
//     mini: true, //微型带图标模式
//     audio: [
// 	  {
//         name: 'Shelter',//'Shelter'
//         artist: 'Shelter' ,//'Shelter'
//         url: 'http://music.163.com/song/media/outer/url?id=461347460.mp3',
//         cover: '', //'/img/favicon.png',
//       },
     
//     ]
// });

const ap = new APlayer({
  container: document.getElementById('aplayer'),
  autoplay: false,
 // narrow: true, 
  //mini: true,
  fixed: true,
  width: '',
  loop: 'all',
  preload: 'auto', 
  lrcType: 1,
  theme: '#e9e9e9',
  audio: [
      {
          name: 'Born to Die',
          artist: 'Lana Del Rey',
          url: 'http://music.163.com/song/media/outer/url?id=34690707.mp3',
          cover: 'https://p1.music.126.net/OtQ5_iqEASnwrBooprUSpQ==/109951163520346143.jpg?param=130y130',
          lrc: ""
      } 
  ]
});

const colorThief = new ColorThief();
const setTheme = (index) => {
  if (!ap.list.audios[index].theme) {
      colorThief.getColorAsync(ap.list.audios[index].cover, function (color) {
          ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
      });
  }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
  setTheme(index.index);
});



