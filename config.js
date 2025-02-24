const toBool = (x) => x == "true";
const { existsSync } = require("fs");
const { Sequelize } = require("sequelize");
if (existsSync("config.env")) require("dotenv").config({ path: "./.env" });
process.env.NODE_OPTIONS = "--max_old_space_size=2560"; //2.5
const DB_URL = process.env.DATABASE_URL || "";

module.exports = {
  ANTI_DELETE: process.env.ANTI_DELETE || "g", // can use g, p, or jid eg '2348114860536@s.whatsapp.net'
  SESSION_ID: process.env.SESSION_ID || " ", //your session id you got from scan required to restore your ceds
  HEROKU: {
    API_KEY: process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME,
  },
  KOYEB: toBool(process.env.KOYEB || "true"),
  KOYEB_API_KEY: process.env.KOYEB_API_KEY,
  KOYEB_APP_NAME: process.env.KOYEB_APP_NAME,
  VPS: toBool(process.env.VPS || "true"),
  PORT: process.env.PORT || 3069,
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCZIqhWvQZ54K2Bjk418vbg7kO6zichY6c",
  REPO: "rudhachu/atestt",
  TZ: process.env.TZ || "Africa/lagos", // leave if you don't know what you're doing
  REJECT_CALL: toBool(process.env.REJECT_CALL || "false"),
  BADWORD_BLOCK: toBool(process.env.BADWORD_BLOCK || "false"),
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE || "true"),
  PM_BLOCK: toBool(process.env.PM_BLOCK || "false"),
  CALL_BLOCK: toBool(process.env.CALL_BLOCK || "false"),
  STATUS_VIEW: process.env.STATUS_VIEW || "true",
  SAVE_STATUS: toBool(process.env.SAVE_STATUS || "false"),
  ADMIN_SUDO_ACCESS: toBool(process.env.ADMIN_SUDO_ACCESS || "true"),
  DISABLE_PM: toBool(process.env.DISABLE_PM || "false"),
  DISABLE_GRP: toBool(process.env.DISABLE_GRP || "false"),
  ERROR_MSG: toBool(process.env.ERROR_MSG || "true"),
  AJOIN: toBool(process.env.AJOIN || "false"),
  READ: process.env.READ || "cmd", //true, cmd
  REACT: process.env.REACT || "", //true, cmd, emoji
  WARNCOUNT: process.env.WARNCOUNT || 3,
  BOT_INFO:process.env.BOT_INFO ||"ʀᴜᴅʜʀᴀ ʙᴏᴛ;ʀᴜᴅʜʀᴀɴ;https://raw.githubusercontent.com/rudhraan/media/main/image/rudhra3.jpeg",
  WORKTYPE: process.env.WORKTYPE || "private",
  PREFIX: process.env.PREFIX || "[.,#!]", //both  .  and [.] equal, for multi prefix we use [] this
  LANG: process.env.LANG || "en",
  PERSONAL_MESSAGE: process.env.PERSONAL_MESSAGE || "null",
  BOT_PRESENCE: process.env.BOT_PRESENCE || "", //available , composing, recording, paused
  ABIO: process.env.ABIO || "true", //autobio
  AUDIO_DATA: process.env.AUDIO_DATA || "RUDHRA-BOT;Ƥ ʀ ɪ ɴ ᴄ ᴇ  Ʀ ᴜ ᴅ ʜ;https://raw.githubusercontent.com/rudhraan/media/main/image/rudhra2.jpg",
  STICKER_DATA: process.env.STICKER_DATA || "Ʀ ᴜ ᴅ ʜ ʀ λ;Ƥ ʀ ɪ ɴ ᴄ ᴇ  Ʀ ᴜ ᴅ ʜ",
  SUDO: process.env.SUDO || "919895809960", // add sudo numbers here seperated by a comma(,) after each
  RMBG_KEY: process.env.RMBG_KEY,
  OPEN_AI: process.env.OPEN_AI,
  ELEVENLABS: process.env.ELEVENLABS,
  LOGS: process.env.LOGS || true,
  DATABASE: DB_URL
    ? new Sequelize(DB_URL, {
        dialect: "postgres",
        ssl: true,
        protocol: "postgres",
        dialectOptions: {
          native: true,
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      })
    : new Sequelize({
        dialect: "sqlite",
        storage: "./database.db",
        logging: false,
      }),
};
