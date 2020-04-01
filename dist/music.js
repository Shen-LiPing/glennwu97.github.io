const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    narrow: true,
   // autoplay: false,  //吸盘模式
   // mini: true, //微型带图标模式
    audio: [
	  {
        name: 'Shelter',
        artist: 'Shelter',
        url: 'http://music.163.com/song/media/outer/url?id=461347460.mp3',
        cover: '/img/favicon.png',
      },
     
    ]
});

