const { Alpha, fetchJson, mode, AudioMetaData, lang, toAudio, config } = require("../lib");
const fs = require('fs');

Alpha({
  pattern: 'take',
  desc: lang.GENERAL.TAKE_DESC,
  react: "⚒️",
  fromMe: mode,
  type: "maker"
}, async (message, match) => {
      if (!message.reply_message.sticker && !message.reply_message.audio && !message.reply_message.image && !message.reply_message.video) return message.reply('reply to a sticker/audio');
      if (message.reply_message.sticker || message.reply_message.image || message.reply_message.video) {
          match = match || config.STICKER_DATA;
          let media = await message.reply_message.download();
          return await message.sendSticker(message.jid, media, {
              packname: match.split(/[|,;]/)[0] || match,
              author: match.split(/[|,;]/)[1]
          });
      } else if (message.reply_message.audio) {
          const opt = {
              title: match ? match.split(/[|,;]/) ? match.split(/[|,;]/)[0] : match : config.AUDIO_DATA.split(/[|,;]/)[0] ? config.AUDIO_DATA.split(/[|,;]/)[0] : config.AUDIO_DATA,
              body: match ? match.split(/[|,;]/)[1] : config.AUDIO_DATA.split(/[|,;]/)[1],
              image: (match && match.split(/[|,;]/)[2]) ? match.split(/[|,;]/)[2] : config.AUDIO_DATA.split(/[|,;]/)[2]
          }
          const AudioMeta = await AudioMetaData(await toAudio(await message.reply_message.download()), opt);
          return await message.send(AudioMeta,{
              mimetype: 'audio/mpeg'
          },'audio');
      }
  })
