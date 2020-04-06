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
 narrow: true, 
  //mini: true,
  fixed: true,
  width: '',
  loop: 'all',
  preload: 'auto', 
  theme: '#e9e9e9',
  audio: [
      {
          name: 'Shelter (Piano version)',
          artist: 'Porter Robinson / Madeon',
          url: 'https://music.163.com/song/media/outer/url?id=461347460.mp3',
          cover: 'https://p2.music.126.net/nEaSbkg_Cn8gN9vLoSz0gQ==/18494885092595843.jpg',
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



