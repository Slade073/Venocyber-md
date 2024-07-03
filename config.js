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
global.sudo = process.env.SUDO || "2349016595825";
global.owner = process.env.OWNER_NUMBER || "2349016595825";
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
global.read_status_from = process.env.READ_STATUS_FROM || "2349016595825";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpkRnVmWkM0Sk5GWEVpNWt1Z3pJTlJwV25lbE5RVTFLWlM0Sko1bFFYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGtZQjloemhGcHhYS2FzdEtkbjNidkRaZFpjY2tWZmVValJ0azNSb295MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQ0FuWjRMNE51U3BNMWNpL1BEY21pekFlcWtuTFVoV2FQb3l6S1F1M0ZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPR05QZHNudTJyR25mSVMvamc5b3lhV1BhTHhvZ3A3TjdGMEhzTVY1eHlNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQTk8veld6dVBXeHRLNVFSRkZmZTkzeUVySXlPRy94MjdpMERZNFZRa3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im50ZGtucC90UkdrdnpCMDNIaFZvREV0dC9Tdk1qMWVPcktIV3BWMStUbDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZtN1VNVWJ6T3ovTXZlOHhFdkM3K2o2K3BoSTNEVlFCUWlpN3pKQnZrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHJ6L1d0aHd4MEJPZG5uM2cyYkJ0L2o4YTRkYWkrdDZRcXBMOW45SVlBTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZqaVArL0JWYWRJekV2U2Z6UWh0Vko0aFltdDVyYUd3QkRvM09tbmZJUGswQ2w2cW5nek5FVlJ5ZVpiMllBUDNJUEROS1hFZ1JKZGdiTzZjWVUycWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM5LCJhZHZTZWNyZXRLZXkiOiJuMzJHMC9VcWpYbWlrU2t5NU5JWVhXUGp6dURPMXpDL043eEp0WlE4cFNnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRazd3TnhLMlR4MjY0Uy1nMi1nSkZBIiwicGhvbmVJZCI6ImYyMzU1NmQzLTA5NDgtNDU3Yy05ZjM3LWJhYmFkMWNkODM0YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UG9DQTM5YkdFRk1NZHlVcUtuektNVGhZVzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05rb1Q1cUFuQm5NWHdmMW55S0I1dFpCOFBzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFYTlY1OEtIIiwibWUiOnsiaWQiOiIyMzQ5MDE2NTk1ODI1OjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTUFZWFNBTiBUViJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVNMbE5jRkVJeW5sN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR3JFRktoOUtkVit3L3h6amFFeDc5VW5MOS9PVWlHNHh1V3BjazlpWXhYOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYkkxdlVJbjYrN0VyRWVsVnhjQ3BCR25Ubmd5SnFHWlFFcXptKytlc3FIYjlraURFc2xsRmZ3QzB0TmY0elo5Z1NtWUVxekZHMUZHRjBxV0FhMmJvRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlhuS3JXT1JnRTdaZ0EySHV4cW5qQldKVVNRTmxrS1ZBY0FZU09JM2puSnNDazlKQWhtM0dFWXBGK0dzQzB0d1hoM1JJM3RBR1cvczJ4L1JPWUhXT2dRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAxNjU5NTgyNTo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJxeEJTb2ZTblZmc1A4YzQyaE1lL1ZKeS9memxJaHVNYmxxWEpQWW1NVi8ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAwNDY0OTB9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "MAYXSAN TV",
  packname: process.env.PACK_NAME || "MAYXSAN TV",
  botname: process.env.BOT_NAME || "MAYXSAN TV",
  ownername: process.env.OWNER_NAME || "MAYXSAN TV",
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
