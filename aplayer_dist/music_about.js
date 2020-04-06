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
            url: 'http://music.163.com/song/media/outer/url?id=34690732.mp3',
            cover: 'https://p1.music.126.net/ZBYyZjULsUjXZR3tkpl4QQ==/109951163426798003.jpg?param=130y130',
            lrc: "[00:00.000] 作曲 : Lana Del Rey/Justin Parker[00:01.000] 作词 : Lana Del Rey/Justin Parker[00:20.110]Swinging in the backyard[00:22.070]Pull up in your fast car[00:24.530]Whistling my name[00:28.300]Open up a beer[00:29.910]And you say get over here[00:31.710]And play a video game[00:36.150]I'm in his favorite sun dress[00:37.760]Watching me get undressed[00:40.080]Take that body downtown[00:44.110]I say you the bestest[00:45.680]Lean in for a big kiss[00:47.650]Put his favorite perfume on[00:51.470]Go play a video game[00:54.940]It's you, it's you, it's all for you[00:58.530]Everything I do[01:01.830]I tell you all the time[01:04.730]Heaven is a place on earth with you[01:07.270]Tell me all the things you want to do[01:12.710]I heard that you like the bad girls[01:15.270]Honey, is that true?[01:20.360]It's better than I ever even knew[01:24.250]They say that the world was built for two[01:27.880]Only worth living if somebody is loving you[01:37.710]Baby now you do[01:46.620]Singing in the old bars[01:48.210]Swinging with the old stars[01:50.500]Living for the fame[01:54.790]Kissing in the blue dark[01:56.150]Playing pool and wild darts[01:58.280]Video games[02:02.470]He holds me in his big arms[02:04.040]Drunk and I am seeing stars[02:06.160]This is all I think of[02:09.910]Watching all our friends fall[02:11.510]In and out of Old Paul's[02:13.880]This is my idea of fun[02:17.050]Playing video games[02:21.700]It's you, it's you, it's all for you[02:24.420]Everything I do[02:28.210]I tell you all the time[02:30.750]Heaven is a place on earth with you[02:33.590]Tell me all the things you want to do[02:38.200]I heard that you like the bad girls[02:40.710]Honey, is that true?[02:43.900]It's better than I ever even knew[02:49.700]They say that the world was built for two[02:53.560]Only worth living if somebody is loving you[03:03.780]Baby now you do[03:07.950](Now you do)[03:20.820]It's you, it's you, it's all for you[03:23.660]Everything I do[03:26.350]I tell you all the time[03:29.370]Heaven is a place on earth with you[03:30.980]Tell me all the things you want to do[03:36.760]I heard that you like the bad girls[03:40.430]Honey, is that true?[03:44.530]It's better than I ever even knew[03:48.030]They say that the world was built for two[03:54.800]Only worth living if somebody is loving you[04:01.820]Baby now you do"
        },
        {
            name: 'Still Young',
            artist: 'Neon Trees',
            url: 'http://music.163.com/song/media/outer/url?id=17596214.mp3',
            cover: 'https://p1.music.126.net/ccgjHh54rj0jw_RDfS38HA==/2528876744058326.jpg?param=130y130',
            lrc: "[00:49.39]love is a game that we could play[00:53.93]even only for today[00:57.60]i don’t wanna lose you[01:01.86][01:04.04]we’ve been apart for far too long[01:08.71]now we only have a song[01:12.66]let the music move you[01:16.08]there was a part of me[01:19.01]that never left a part of you[01:23.00]i wish i could be everything you wanted[01:27.56][01:29.36]but i’m still young[01:34.97]wide-eyed and hopeless[01:37.26]yeah i’m still young[01:42.40]i want your devotion to this[01:46.27]can we kiss like we do in my head[01:49.46]can we dance like we do on my bed[01:55.85]like we’re still young[01:58.80][02:00.89]love is a loss that we incur[02:06.34]when we gamble with the world[02:09.99]i dont wanna lose you[02:14.67][02:16.06]i feel my life has just begun[02:21.32]i can hear you singalong[02:25.41]now the music in you[02:28.23]there was a part of me[02:31.08]that never left a part of you[02:35.59]i wish i could be everything you wanted[02:40.19][02:42.00]but i’m still young[02:47.44]wide-eyed and hopeless[02:49.63]yeah i’m still young[02:54.92]i want your devotion to this[02:58.63]can we kiss like we do in my head[03:01.94]can we dance like we do on my bed[03:07.30]like were still young[03:11.14][03:25.00]baby don’t you cry[03:27.91]i won’t tell you lies[03:32.51]i’ll just sit and sing you lullabies[03:38.33]lullabies[03:40.17]baby don’t you cry[03:43.34]i won’t tell you lies[03:47.54]i’ll just sit and sing you lullabies[03:53.69][03:56.09]cuz i’m still young[04:01.74]wide-eyedand hopeless[04:04.00]yeah i’m still young[04:09.29]i want your devotion to this[04:13.05]can we kiss like we do in my head[04:16.70]can we dance like we do on my bed[04:21.49][04:23.15]LIKE WE’RE STILL YOUNG[04:28.61]YOUNG YOUNG YOUNG YOUNG......[04:51.59][04:55.69][04:57.95][05:07.00]"
        },
        {
            name: 'Long Live',
            artist: 'Taylor Swift',
            url: 'https://m8.music.126.net/20190404222639/79e7b1460f8b7517e1a49c079d2a2235/ymusic/sdWA4lq8GX2pKvMkGRanaQ==/509951162886551607',
            cover: 'https://p2.music.126.net/GkKqLo7rY-Uxs-415At1xg==/109951163008406494.jpg?param=130y130',
            lrc: "[00:16.450]I said remember this moment[00:21.160]In the back of my mind[00:26.400]The time we stood with our shaking hands[00:30.500]crowds and stands went wild[00:33.669][00:35.399]We were the Kings and the Queens[00:40.199]And they read off our names[00:44.649]The night you danced like you knew our lives[00:48.809]Would never be the same[00:52.429][00:55.100]You held your head like a hero[00:58.889]On a history book page[01:03.529]It was the end of a decade[01:08.369]But the start of an age[01:11.369][01:14.359]Long live the walls we crashed through[01:18.179]How the kingdom lights shined just for me and you[01:22.519]I was screaming long live all the magic we made[01:27.580]And bring on all the pretenders[01:30.689]One day we will be remembered[01:35.079][01:36.619]I said remember this feeling[01:41.190]I passed the pictures around[01:45.999]Of all the years that we stood there[01:49.079]On the side-lines wishing for right now[01:54.190][01:55.359]We are the Kings and the Queens[01:59.029]You trade your basevall cap for a crown[02:05.199]When they gave us our trophies[02:08.580]And we help them up for our town[02:14.200]And the cynics were outraged[02:18.840]Screaming this is absurd[02:23.480]Cause for a moment a band of theives[02:28.300]In ripped up jeans got to rule the world[02:33.910][02:34.640]Long live the walls we crashed through[02:38.140]How the kingdom lights shined just for me and you[02:42.590]I was screaming long live all the magic we made[02:47.800]And bring on all the pretenders, I'm not afraid[02:52.200][02:53.800]Long live all the mountains we moved[02:57.100]I had the time of my life fighting dragons with you[03:01.600]I was screaming long live the look on your face[03:07.100]And bring on all the pretenders[03:09.500]One day we will be remembered[03:13.920][03:17.390]Hold on to spinning around[03:21.830]Confetti falls to the ground[03:27.600]May these memories break our fall[03:35.010]Will you take a moment[03:39.650]Promise me this[03:43.400]That you'll stand by my forever[03:47.360]But if God forbid fate should step in[03:51.700][03:53.020]And force us into a goodbye[03:58.200]If you have children some day[04:02.610]When they point to the pictures[04:07.600]Please tell them my name[04:12.200]Tell them how the crowds went wild[04:17.200]Tell them how our hope it shined[04:23.280]Long live the walls we crashed through[04:26.340]I had the time of my life with you[04:31.610]Long, long live the walls we crashed through[04:36.630]How the kingdom lights shined just for me and you[04:40.830]And I was screaming long live all the magic we made[04:45.420]And bring on all the pretenders, I'm not afraid[04:50.600]Saying long live all the mountains we moved[04:54.630]I had the time of my life fighting dragons with you[05:00.020]And long, long live, the look on your face[05:03.930]And bring on all the pretenders[05:07.680]One day[05:11.690]We will be remembered"
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
  // {% aplayer "Shelter" "Shelter" "http://music.163.com/song/media/outer/url?id=461347460.mp3" "https://gitee.com//gleenwu/picbed01/raw/master/img/20200309235043.jpg" "narrow"  "autoplay" "width:xxx" "lrc:xxx" %}
  
  
  