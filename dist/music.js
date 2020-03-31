const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mini: true,
   // autoplay: false,  //吸盘模式
    audio: [
	  {
        name: 'Shelter',
        artist: 'Shelter',
        url: 'http://music.163.com/song/media/outer/url?id=461347460.mp3',
        cover: '/img/favicon.png',
      },
     
    ]
});

