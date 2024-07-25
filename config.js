//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "27736267768";
global.owner = process.env.OWNER_NUMBER || "277359401";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "27735940102";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BxUzljeWdDT0dxTHhiRjZFMEFGZTFURkVSVk9VUjdFWnJ6dzgrMmUyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakd3ODZSQVdkbWViSnViVlZYWlJ4b3dlR0dtQk53RHAxcG5NdXNDa2puVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQnJOTndvM1RhYnJ3V0U3V3ExTElDbzFZRGFyQ3NhcEtJQm5jUEYyNjM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0clNQOW44aFpmZTdwZXJHNEY4K0hDd3FLUWErb3RyYmkxTFpLNHNzSjNNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRIdTAzOGVNS0Ivd0RoYVJMcDlPazM0dlJZaDV0SU1zbnNZcFdGN1FkVzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM1QmlsTW9PQjc4WDQ4NjVUQnNxR0tPMnVyRjJUUVU4U2FEZzhyQklTUUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05CanFpemZORmNHdjAyZzNhN0UyT2p5QU1MdS9wdU5oeUNFN3F6VGswUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblpTTHFjOVRMa3JiYXhuUkJodjArWGhiREtCMHpLeHNydXJPTlRER0JUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVDa2d2V3ptVmlIems0RWZJZW40bTF0TE9pckFDQzdtb0MzVjNhUTdyZmZZTkZmQWNVdU54N3hzSUIraWdOTjAvdldETzR2ZE96dWNFay80OWlXaGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiJtdU4yd3E2SForWG9lZ0k0SFBsdXlPZ2N4c3pOazdkd25MdmF1OWdKR0dnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NzM1OTQwMTAyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdGOUI2QThGMTQ1MjA5OTIwOTUyQjc3QkM5NDA5MEM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE5NDI5NzF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjRYZnpSS1hNUzZpakJId3M0Q3RITUEiLCJwaG9uZUlkIjoiMWEyZjNlM2EtZmU3Ny00NDc2LWFmZTktMzJhZDNjZWI3NWUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZsdjlDZ2RiQkpiU3p4clRVQnRib0RndWxzOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrU2pMU0w4dzBxVUlBN0VaVkFHaWpkWnRDMGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOTVXSzFQSkQiLCJtZSI6eyJpZCI6IjI3NzM1OTQwMTAyOjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiT2luayBvaW5rIGJpaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFMwMGZBREVLYUhpN1VHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibXpnczdtNHgvTEhldFBGcFZ0V2w1TXdQU0YyUmdFWFJMck9DdFVweFBpYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoid0dackhEVWtjVnd5blE5ZSt2MzZvR1labGo4NmRKamJlVVU3Wnc4dCtxdlU2a3QrYko0SlllM0RpbEw5b3ZMdGh4TXk4dDhlRGEvc3lNOFEzR240Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6IktITUdrOGdEQUE0MTVTMVUyRXI4aHVYVVBRek5UNHU5U2ViTGlxZ3IwSEJxdjV4NkxNM0RMcnRib0pVUjJ4LzFjL1ZXOFZCcXljNmlFR2R1Qk5na2hBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc3MzU5NDAxMDI6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaczRMTzV1TWZ5eDNyVHhhVmJWcGVUTUQwaGRrWUJGMFM2emdyVktjVDRuIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxOTQyOTY1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpIciJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "Slade TV",
  packname: process.env.PACK_NAME || "Slade TV",
  botname: process.env.BOT_NAME || "Slade TV",
  ownername: process.env.OWNER_NAME || "Slade TV",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
