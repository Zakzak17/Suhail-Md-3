const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Z4CK" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_44_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA5LFxuICAgICAgICA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5LFxuICAgICAgICA3MixcbiAgICAgICAgODgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5LFxuICAgICAgICAyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxLFxuICAgICAgICA4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDU5LFxuICAgICAgICA5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN2cyTjZQazZCTVI3WW1lRk1IYjVZQzRjVUhvR0tncVpsR3cwL2hMOFhZQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI3MDk2MjA5NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFDNDMwOTI4NDc0MzQ3NTlDNUJEQjdEQzEzRjEyQkNCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc2MTY3MzQ3OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIQW1SZUxyZVIwNm9Fd1VrQWxSbUhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcxYTExZGE1LWYwMDMtNGZjMS1iMjBjLTc0ZjYyZDc0MWIzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICA2MyxcbiAgICAgIDIxOSxcbiAgICAgIDM2LFxuICAgICAgMzYsXG4gICAgICAxMzIsXG4gICAgICAxNjcsXG4gICAgICAxNSxcbiAgICAgIDQ0LFxuICAgICAgMTA0LFxuICAgICAgNDUsXG4gICAgICAxODEsXG4gICAgICAxNjEsXG4gICAgICAyMDMsXG4gICAgICAyMjUsXG4gICAgICAxOTAsXG4gICAgICAyMjUsXG4gICAgICAxMzcsXG4gICAgICA4MyxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAyMTQsXG4gICAgICAyMjAsXG4gICAgICA5OCxcbiAgICAgIDUsXG4gICAgICAxOTUsXG4gICAgICAxMzksXG4gICAgICA0NCxcbiAgICAgIDE1OSxcbiAgICAgIDE3LFxuICAgICAgNjUsXG4gICAgICA2MSxcbiAgICAgIDUyLFxuICAgICAgODEsXG4gICAgICAyMTIsXG4gICAgICAxNDAsXG4gICAgICA4NixcbiAgICAgIDE0MSxcbiAgICAgIDEzNSxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lPb2w1TUVFSUNDaE1nR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS01lYTh2dndOQjdKbTN0QjI1aHlYY29DUGVOTDBUNGJWSUVOb1NncjRubz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGMEhjVEc0Nlc2R2I4OTk2Q1N0ZFV5bHhBTlJTbGpWNFY5NEVQWUI3QnRabGoxQVZZOGE0Wjl3SWYvdHlsNTV6bWZrM09NcDFHdnhRVHdES2RDNHBCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBY3JVL09KMk1Vd1JzeHdEdXdMRVdyT3lyZ0NZeStpVjVXYzVhaUhPbFNFNnRJbXVreHg0NnQ1UkIxS0YxN1JQeWVHSDVLZGowR1liUDFhMHN4c05EZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIxMjcwOTYyMDk2NDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTg3NzE5ODM3MjA1Mzk6MjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWjRDS1wiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjEyNzA5NjIwOTY0OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzYxNjczNDc2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3hXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPeFYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwQmNpaTNZSjh2VzlwaXUrS1NucExBalJpM2pWbzJsMkFtckp1ZjM4dXE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMTM5Njk2NjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU94Vy5qc29uIjogIntcImtleURhdGFcIjpcIjVzQkxKUEw2alFDZjNFNW5lT0JkdFpuSVVaOWJvOUMyUXhKVTRNbDEreWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExMzk2OTY2NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3hYLmpzb24iOiAie1wia2V5RGF0YVwiOlwiN0oyY1BqSTJNUGJKVnJWaGlLTEUvWkpmenNsckZ6QklaVTk1eml1R1loST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTEzOTY5NjY3LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU94WS5qc29uIjogIntcImtleURhdGFcIjpcIndRWGNsc3JRQzc1b0kzS2pFNGZVZk4vS3ByUXE4MDZ0bGFDMGxWd0QxaFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTExMzk2OTY2NyxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzYxNjcwMDc4MTEwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Z4CK",
  ownername:process.env.OWNER_NAME|| "Z4CK",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Z4CK"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

