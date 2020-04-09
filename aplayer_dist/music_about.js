const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    listFolded: false,
    lrcType: 1,
    theme: '#e9e9e9',
    audio: [
        {
            name: 'Video Games',
            artist: 'Lana Del Rey',
            url: 'https://music.163.com/song/media/outer/url?id=34690732.mp3',
            cover: 'https://p1.music.126.net/ZBYyZjULsUjXZR3tkpl4QQ==/109951163426798003.jpg?param=130y130',
            lrc: "[00:00.000] 作曲 : Lana Del Rey/Justin Parker[00:01.000] 作词 : Lana Del Rey/Justin Parker[00:20.110]Swinging in the backyard[00:22.070]Pull up in your fast car[00:24.530]Whistling my name[00:28.300]Open up a beer[00:29.910]And you say get over here[00:31.710]And play a video game[00:36.150]I'm in his favorite sun dress[00:37.760]Watching me get undressed[00:40.080]Take that body downtown[00:44.110]I say you the bestest[00:45.680]Lean in for a big kiss[00:47.650]Put his favorite perfume on[00:51.470]Go play a video game[00:54.940]It's you, it's you, it's all for you[00:58.530]Everything I do[01:01.830]I tell you all the time[01:04.730]Heaven is a place on earth with you[01:07.270]Tell me all the things you want to do[01:12.710]I heard that you like the bad girls[01:15.270]Honey, is that true?[01:20.360]It's better than I ever even knew[01:24.250]They say that the world was built for two[01:27.880]Only worth living if somebody is loving you[01:37.710]Baby now you do[01:46.620]Singing in the old bars[01:48.210]Swinging with the old stars[01:50.500]Living for the fame[01:54.790]Kissing in the blue dark[01:56.150]Playing pool and wild darts[01:58.280]Video games[02:02.470]He holds me in his big arms[02:04.040]Drunk and I am seeing stars[02:06.160]This is all I think of[02:09.910]Watching all our friends fall[02:11.510]In and out of Old Paul's[02:13.880]This is my idea of fun[02:17.050]Playing video games[02:21.700]It's you, it's you, it's all for you[02:24.420]Everything I do[02:28.210]I tell you all the time[02:30.750]Heaven is a place on earth with you[02:33.590]Tell me all the things you want to do[02:38.200]I heard that you like the bad girls[02:40.710]Honey, is that true?[02:43.900]It's better than I ever even knew[02:49.700]They say that the world was built for two[02:53.560]Only worth living if somebody is loving you[03:03.780]Baby now you do[03:07.950](Now you do)[03:20.820]It's you, it's you, it's all for you[03:23.660]Everything I do[03:26.350]I tell you all the time[03:29.370]Heaven is a place on earth with you[03:30.980]Tell me all the things you want to do[03:36.760]I heard that you like the bad girls[03:40.430]Honey, is that true?[03:44.530]It's better than I ever even knew[03:48.030]They say that the world was built for two[03:54.800]Only worth living if somebody is loving you[04:01.820]Baby now you do"
        },
        {
            name: 'Still Young',
            artist: 'Neon Trees',
            url: 'https://music.163.com/song/media/outer/url?id=17596214.mp3',
            cover: 'https://p1.music.126.net/ccgjHh54rj0jw_RDfS38HA==/2528876744058326.jpg?param=130y130',
            lrc: "[00:49.39]love is a game that we could play[00:53.93]even only for today[00:57.60]i don’t wanna lose you[01:01.86][01:04.04]we’ve been apart for far too long[01:08.71]now we only have a song[01:12.66]let the music move you[01:16.08]there was a part of me[01:19.01]that never left a part of you[01:23.00]i wish i could be everything you wanted[01:27.56][01:29.36]but i’m still young[01:34.97]wide-eyed and hopeless[01:37.26]yeah i’m still young[01:42.40]i want your devotion to this[01:46.27]can we kiss like we do in my head[01:49.46]can we dance like we do on my bed[01:55.85]like we’re still young[01:58.80][02:00.89]love is a loss that we incur[02:06.34]when we gamble with the world[02:09.99]i dont wanna lose you[02:14.67][02:16.06]i feel my life has just begun[02:21.32]i can hear you singalong[02:25.41]now the music in you[02:28.23]there was a part of me[02:31.08]that never left a part of you[02:35.59]i wish i could be everything you wanted[02:40.19][02:42.00]but i’m still young[02:47.44]wide-eyed and hopeless[02:49.63]yeah i’m still young[02:54.92]i want your devotion to this[02:58.63]can we kiss like we do in my head[03:01.94]can we dance like we do on my bed[03:07.30]like were still young[03:11.14][03:25.00]baby don’t you cry[03:27.91]i won’t tell you lies[03:32.51]i’ll just sit and sing you lullabies[03:38.33]lullabies[03:40.17]baby don’t you cry[03:43.34]i won’t tell you lies[03:47.54]i’ll just sit and sing you lullabies[03:53.69][03:56.09]cuz i’m still young[04:01.74]wide-eyedand hopeless[04:04.00]yeah i’m still young[04:09.29]i want your devotion to this[04:13.05]can we kiss like we do in my head[04:16.70]can we dance like we do on my bed[04:21.49][04:23.15]LIKE WE’RE STILL YOUNG[04:28.61]YOUNG YOUNG YOUNG YOUNG......[04:51.59][04:55.69][04:57.95][05:07.00]"
        },
        
    ]
  });

  // {% aplayer "Shelter" "Shelter" "https://music.163.com/song/media/outer/url?id=461347460.mp3" "https://gitee.com//gleenwu/picbed01/raw/master/img/20200309235043.jpg" "narrow"  "autoplay" "width:xxx" "lrc:xxx" %}
  

  
// <!-- {% aplayerlist %}
// {
//     "narrow": true,                          // （可选）播放器袖珍风格
//     "autoplay": false,                         // （可选) 自动播放，移动端浏览器暂时不支持此功能
//     "mode": "random",            
//     "showlrc": 1,                   
//     "mutex": true,                    
//     "theme": "#e6d0b2",	     
//     "preload": "none", 
//     "listmaxheight": "513px",
//     "music": [
//         {
//             "title": "CoCo",
//             "author": "Jeff Williams",
//             "url": "http://music.163.com/song/media/outer/url?id=34690707.mp3",
//             "pic": "https://p1.music.126.net/OtQ5_iqEASnwrBooprUSpQ==/109951163520346143.jpg?param=130y130",
//             "lrc": "caffeine.txt"
//         }
//     ]
// }
// {% endaplayerlist %} -->




// <!-- {% aplayer title author url [picture_url, narrow, autoplay, width:xxx, lrc:xxx] %} -->

// <!-- {% meting "002j785c33YQHT" "tencent" "song" %} -->

// <!-- 基于 MetingJS 的 APlayer 播放器 -->
// <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.7.0/dist/APlayer.min.css">
// <div class="aplayer" data-id="534542404" mini="true" data-server="netease" data-type="song"></div>
// <script src="https://cdn.jsdelivr.net/npm/aplayer@1.7.0/dist/APlayer.min.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/meting@1.1.0/dist/Meting.min.js"></script> -->
  
  