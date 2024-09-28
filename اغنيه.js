import _0x48155f from 'node-fetch';
import _0x3c1cf2 from 'yt-search';
import _0x45acfb from 'ytdl-core';
import _0x492550 from 'axios';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import { bestFormat, getUrlDl } from '../lib/y2dl.js';
const handler = async (_0x28e23f, {
  conn: _0x22a7b9,
  command: _0x4bf9aa,
  args: _0x5448a9,
  text: _0x17f4c2,
  usedPrefix: _0x3c7403
}) => {
  if (!_0x17f4c2) {
    throw "_*>>🌿قسم اليوتيوب 🌿<<*_\n*حط اسم عشان تنزل اللي انت عايزو*\n\n*—◉ مثل:*\n*" + (_0x3c7403 + _0x4bf9aa) + " xxxtntacion sad*\n\n" + global.veeeee;
  }
  await _0x22a7b9.sendMessage(_0x28e23f.chat, {
    'react': {
      'text': '✅',
      'key': _0x28e23f.key
    }
  });
  try {
    const _0x2e3839 = await search(_0x5448a9.join(" "));
    let _0x407d81 = '';
    if (_0x4bf9aa === "play") {
      _0x407d81 = "audio 🔊";
    } else if (_0x4bf9aa === "play2") {
      _0x407d81 = "video 🎥";
    }
    const _0x262d07 = ("*◉——⌈🔊 ALMOHREZ 🔊⌋——◉*\n" + global.anabro + "\n\n❏ 📌 *الاسم:* " + _0x2e3839[0x0].title + "\n❏ 📆 *التاريخ:* " + _0x2e3839[0x0].ago + "\n❏ ⌚ *الدقايق:* " + secondString(_0x2e3839[0x0].duration.seconds) + "\n❏ 👀 *المشاهدات:* " + ('' + MilesNumber(_0x2e3839[0x0].views)) + "\n❏ 👤 *الصانع:* " + _0x2e3839[0x0].author.name + "\n❏ ⏯️ *التشغيل:* " + _0x2e3839[0x0].author.url + "\n❏ 🆔 *الرمز:* " + _0x2e3839[0x0].videoId + "\n❏ 🪬 *النوع:* " + _0x2e3839[0x0].type + "\n❏ 🔗 *الينك:* " + _0x2e3839[0x0].url + "\n\n❏ *_انـتـظـر قليـلاً " + _0x407d81 + ", جـاري تـحـميل طـلبـك．．．_*").trim();
    _0x22a7b9.sendMessage(_0x28e23f.chat, {
      'image': {
        'url': _0x2e3839[0x0].thumbnail
      },
      'caption': _0x262d07
    }, {
      'quoted': _0x28e23f
    });
    if (_0x4bf9aa == "اغنيه") {
      try {
        const _0x3110a4 = await bestFormat(_0x2e3839[0x0].url, "audio");
        const _0x2c472e = await getUrlDl(_0x3110a4.url);
        const _0x2cce32 = await getBuffer(_0x2c472e.download);
        _0x22a7b9.sendMessage(_0x28e23f.chat, {
          'audio': _0x2cce32,
          'fileName': _0x2e3839[0x0].title + ".mp3",
          'mimetype': "audio/mpeg"
        }, {
          'quoted': _0x28e23f
        });
      } catch (_0x1050ba) {
        console.log(_0x1050ba);
        try {
          const _0x133770 = _0x2e3839[0x0].url;
          const _0x325be8 = await youtubedl(_0x133770)["catch"](async _0x19677a => await youtubedlv2(_0x133770));
          const _0x5532ba = await _0x325be8.audio["128kbps"].download();
          const _0x21e0b0 = await _0x325be8.title;
          await _0x22a7b9.sendFile(_0x28e23f.chat, _0x5532ba, _0x21e0b0 + ".mp3", null, _0x28e23f, false, {
            'mimetype': "audio/mpeg"
          });
        } catch {
          try {
            const _0x92a57c = await _0x48155f("https://api.akuari.my.id/downloader/youtube?link=" + _0x2e3839[0x0].url);
            const _0x13d3bd = await _0x92a57c.json();
            _0x22a7b9.sendMessage(_0x28e23f.chat, {
              'audio': {
                'url': _0x13d3bd.mp3[0x1].url
              },
              'fileName': _0x2e3839[0x0].title + ".mp3",
              'mimetype': "audio/mpeg"
            }, {
              'quoted': _0x28e23f
            });
          } catch {
            try {
              const _0x5e228c = await _0x48155f("https://api.lolhuman.xyz/api/ytplay?apikey=" + lolkeysapi + "&query=" + _0x2e3839[0x0].title);
              const _0x5dbcee = await _0x5e228c.json();
              _0x22a7b9.sendMessage(_0x28e23f.chat, {
                'audio': {
                  'url': _0x5dbcee.result.audio.link
                },
                'fileName': _0x2e3839[0x0].title + ".mp3",
                'mimetype': "audio/mpeg"
              }, {
                'quoted': _0x28e23f
              });
            } catch {
              try {
                const _0x287939 = await _0x48155f("https://api.lolhuman.xyz/api/ytaudio2?apikey=" + lolkeysapi + "&url=" + _0x2e3839[0x0].url);
                const _0x442070 = await _0x287939.json();
                const _0x110b8e = _0x442070.result.title || "error";
                await _0x22a7b9.sendMessage(_0x28e23f.chat, {
                  'audio': {
                    'url': _0x442070.result.link
                  },
                  'fileName': _0x110b8e + ".mp3",
                  'mimetype': "audio/mpeg"
                }, {
                  'quoted': _0x28e23f
                });
              } catch {
                try {
                  const _0x309421 = await _0x3c1cf2(_0x2e3839[0x0].url);
                  const _0x5a37af = _0x309421.all.map(_0xcfb310 => _0xcfb310).filter(_0x232604 => _0x232604.type == "video");
                  const _0x591d52 = await _0x45acfb.getInfo("https://youtu.be/" + _0x5a37af[0x0].videoId);
                  const _0x29639e = await _0x45acfb.chooseFormat(_0x591d52.formats, {
                    'filter': "audioonly"
                  });
                  _0x22a7b9.sendMessage(_0x28e23f.chat, {
                    'audio': {
                      'url': _0x29639e.url
                    },
                    'fileName': _0x5a37af[0x0].title + ".mp3",
                    'mimetype': 'audio/mpeg'
                  }, {
                    'quoted': _0x28e23f
                  });
                } catch {
                  await _0x22a7b9.reply(_0x28e23f.chat, "*[❗] حصل خطأ ابلغ المحرز به*", _0x28e23f);
                }
              }
            }
          }
        }
      }
    }
    if (_0x4bf9aa == "فيديو") {
      try {
        const _0x2f60f5 = _0x2e3839[0x0].url;
        const _0x3c5956 = await youtubedl(_0x2f60f5)["catch"](async _0x468a5b => await youtubedlv2(_0x2f60f5));
        const _0xcfe7ff = await _0x3c5956.video["360p"].download();
        const _0x5701dc = await _0x3c5956.title;
        const _0x19842b = await _0x3c5956.video["360p"].fileSizeH;
        await await _0x22a7b9.sendMessage(_0x28e23f.chat, {
          'video': {
            'url': _0xcfe7ff
          },
          'fileName': _0x5701dc + ".mp4",
          'mimetype': "video/mp4",
          'caption': "*▢ الطلب: " + _0x5701dc + "*\n/▢ الحجم: " + _0x19842b + '*',
          'thumbnail': await _0x48155f(_0x3c5956.thumbnail)
        }, {
          'quoted': _0x28e23f
        });
      } catch {
        try {
          const _0x34dafd = await ytMp4(_0x2e3839[0x0].url);
          await _0x22a7b9.sendMessage(_0x28e23f.chat, {
            'video': {
              'url': _0x34dafd.result
            },
            'fileName': "error.mp4",
            'caption': "_ALMOHREZ-BOT_",
            'thumbnail': _0x34dafd.thumb,
            'mimetype': "video/mp4"
          }, {
            'quoted': _0x28e23f
          });
        } catch {
          try {
            const _0x2dd3c2 = await _0x48155f("https://api.lolhuman.xyz/api/ytvideo2?apikey=" + lolkeysapi + "&url=" + _0x2e3839[0x0].url);
            const _0x4f43fc = await _0x2dd3c2.json();
            const _0x83c82f = _0x4f43fc.result.title || "error";
            const _0x9f2c2e = _0x4f43fc.result.link;
            const _0x366925 = _0x4f43fc.result.size;
            const _0x2e97d5 = _0x4f43fc.result.thumbnail;
            await _0x22a7b9.sendMessage(_0x28e23f.chat, {
              'video': {
                'url': _0x9f2c2e
              },
              'fileName': _0x83c82f + ".mp4",
              'mimetype': "video/mp4",
              'caption': "*▢ الطلب: " + _0x83c82f + "*\n*▢ الحجم: " + _0x366925 + '*',
              'thumbnail': await _0x48155f(_0x2e97d5)
            }, {
              'quoted': _0x28e23f
            });
          } catch {
            await _0x22a7b9.reply(_0x28e23f.chat, "*[❗] خطأ حاول مجددا*", _0x28e23f);
          }
        }
      }
    }
  } catch {
    throw "*[❗تحذير❗] خطأ حاول مجدداً*";
  }
};
handler.help = ["play", 'play2'].map(_0x50bdff => _0x50bdff + " < busqueda >");
handler.tags = ["downloader"];
handler.command = /^(اغنيه|فيديو)$/i;
export default handler;
async function search(_0x1c47a1, _0x8e9bd2 = {}) {
  const _0x5e5edd = await _0x3c1cf2.search({
    'query': _0x1c47a1,
    'hl': 'ar',
    'gl': 'AR',
    ..._0x8e9bd2
  });
  return _0x5e5edd.videos;
}
function MilesNumber(_0x5615b2) {
  const _0x3ad25a = _0x5615b2.toString().split('.');
  _0x3ad25a[0x0] = _0x3ad25a[0x0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return _0x3ad25a[0x1] ? _0x3ad25a.join('.') : _0x3ad25a[0x0];
}
function secondString(_0xc377f6) {
  _0xc377f6 = Number(_0xc377f6);
  const _0x410839 = Math.floor(_0xc377f6 / 86400);
  const _0x47a5b3 = Math.floor(_0xc377f6 % 86400 / 0xe10);
  const _0x4508fd = Math.floor(_0xc377f6 % 0xe10 / 0x3c);
  const _0xaf4f74 = Math.floor(_0xc377f6 % 0x3c);
  const _0x5a4baa = _0x410839 > 0x0 ? _0x410839 + (_0x410839 == 0x1 ? " día, " : " días, ") : '';
  const _0x200c08 = _0x47a5b3 > 0x0 ? _0x47a5b3 + (_0x47a5b3 == 0x1 ? " hora, " : " horas, ") : '';
  const _0x12ed8b = _0x4508fd > 0x0 ? _0x4508fd + (_0x4508fd == 0x1 ? " minuto, " : " minutos, ") : '';
  const _0x627eef = _0xaf4f74 > 0x0 ? _0xaf4f74 + (_0xaf4f74 == 0x1 ? " segundo" : " segundos") : '';
  return _0x5a4baa + _0x200c08 + _0x12ed8b + _0x627eef;
}
function bytesToSize(_0x2983e9) {
  return new Promise((_0x1bab42, _0x5058d9) => {
    const _0x8fbca9 = ["Bytes", 'KB', 'MB', 'GB', 'TB'];
    if (_0x2983e9 === 0x0) {
      return 'n/a';
    }
    const _0x4721d5 = parseInt(Math.floor(Math.log(_0x2983e9) / Math.log(0x400)), 0xa);
    if (_0x4721d5 === 0x0) {
      _0x1bab42(_0x2983e9 + " " + _0x8fbca9[_0x4721d5]);
    }
    _0x1bab42((_0x2983e9 / 0x400 ** _0x4721d5).toFixed(0x1) + " " + _0x8fbca9[_0x4721d5]);
  });
}
async function ytMp3(_0x2b3204) {
  return new Promise((_0x56a455, _0x46240d) => {
    _0x45acfb.getInfo(_0x2b3204).then(async _0x359fde => {
      const _0x464e1c = [];
      for (let _0x52c095 = 0x0; _0x52c095 < _0x359fde.formats.length; _0x52c095++) {
        const _0x179de2 = _0x359fde.formats[_0x52c095];
        if (_0x179de2.mimeType == "audio/webm; codecs=\"opus\"") {
          const {
            contentLength: _0x591b26
          } = _0x179de2;
          const _0x22a1fa = await bytesToSize(_0x591b26);
          _0x464e1c[_0x52c095] = {
            'audio': _0x179de2.url,
            'size': _0x22a1fa
          };
        }
      }
      const _0x106e02 = _0x464e1c.filter(_0x5e1341 => _0x5e1341.audio != undefined && _0x5e1341.size != undefined);
      const _0x5bb1b8 = await _0x492550.get("https://tinyurl.com/api-create.php?url=" + _0x106e02[0x0].audio);
      const _0x44ce63 = _0x5bb1b8.data;
      const _0x52e8b6 = _0x359fde.videoDetails.title;
      const _0x42f611 = _0x359fde.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0x0].url;
      _0x56a455({
        'title': _0x52e8b6,
        'result': _0x44ce63,
        'result2': _0x106e02,
        'thumb': _0x42f611
      });
    })["catch"](_0x46240d);
  });
}
async function ytMp4(_0x196949) {
  return new Promise(async (_0x1ce3af, _0x25b84b) => {
    _0x45acfb.getInfo(_0x196949).then(async _0x1f584d => {
      const _0x25aa2a = [];
      for (let _0x4f51d7 = 0x0; _0x4f51d7 < _0x1f584d.formats.length; _0x4f51d7++) {
        const _0x184124 = _0x1f584d.formats[_0x4f51d7];
        if (_0x184124.container == "mp4" && _0x184124.hasVideo == true && _0x184124.hasAudio == true) {
          const {
            qualityLabel: _0x38bdd1,
            contentLength: _0x4c3c61
          } = _0x184124;
          const _0x4b17dd = await bytesToSize(_0x4c3c61);
          _0x25aa2a[_0x4f51d7] = {
            'video': _0x184124.url,
            'quality': _0x38bdd1,
            'size': _0x4b17dd
          };
        }
      }
      const _0x352370 = _0x25aa2a.filter(_0x27fedd => _0x27fedd.video != undefined && _0x27fedd.size != undefined && _0x27fedd.quality != undefined);
      const _0x297e1f = await _0x492550.get("https://tinyurl.com/api-create.php?url=" + _0x352370[0x0].video);
      const _0x20a265 = _0x297e1f.data;
      const _0x54d09a = _0x1f584d.videoDetails.title;
      const _0x4e04b4 = _0x1f584d.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0x0].url;
      _0x1ce3af({
        'title': _0x54d09a,
        'result': _0x20a265,
        'rersult2': _0x352370[0x0].video,
        'thumb': _0x4e04b4
      });
    })["catch"](_0x25b84b);
  });
}
async function ytPlay(_0x24cdb5) {
  return new Promise((_0x30cce5, _0x326b94) => {
    _0x3c1cf2(_0x24cdb5).then(async _0x4f5385 => {
      const _0x5174f7 = _0x4f5385.videos.slice(0x0, 0x5);
      const _0x39fead = [];
      for (let _0x16960c = 0x0; _0x16960c < _0x5174f7.length; _0x16960c++) {
        _0x39fead.push(_0x5174f7[_0x16960c].url);
      }
      const _0x4d9df = _0x39fead[0x0];
      const _0x4184d9 = await ytMp3(_0x4d9df);
      _0x30cce5(_0x4184d9);
    })["catch"](_0x326b94);
  });
}
async function ytPlayVid(_0x2ea4b3) {
  return new Promise((_0x422f66, _0x32eb13) => {
    _0x3c1cf2(_0x2ea4b3).then(async _0x5e70bd => {
      const _0x268f17 = _0x5e70bd.videos.slice(0x0, 0x5);
      const _0x5aa598 = [];
      for (let _0x46bcd8 = 0x0; _0x46bcd8 < _0x268f17.length; _0x46bcd8++) {
        _0x5aa598.push(_0x268f17[_0x46bcd8].url);
      }
      const _0x237fba = _0x5aa598[0x0];
      const _0x191dfc = await ytMp4(_0x237fba);
      _0x422f66(_0x191dfc);
    })["catch"](_0x32eb13);
  });
}
const getBuffer = async (_0x365e55, _0x48c85f) => {
  try {
    if (_0x48c85f) {
      _0x48c85f;
    } else {
      ({});
    }
    const _0x1c057c = await _0x492550({
      'method': "get",
      'url': _0x365e55,
      'headers': {
        'DNT': 0x1,
        'Upgrade-Insecure-Request': 0x1
      },
      ..._0x48c85f,
      'responseType': "arraybuffer"
    });
    return _0x1c057c.data;
  } catch (_0x280248) {
    console.log("Error : " + _0x280248);
  }
};