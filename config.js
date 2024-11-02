const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "96176328914";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_12_11_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDcyLFxuICAgICAgICA4NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDksXG4gICAgICAgIDg4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDksXG4gICAgICAgIDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDk1LFxuICAgICAgICA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICA5LFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUxLFxuICAgICAgICA3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3bCtOR3IzVGpWbkxMcnZnSUQvWnc2aUdLMTJQdFJsZmZpYlAwbTFqaGVzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTNjlxN3ZQbFNqbWZBTFpOT2QzY1lBXCIsXG4gIFwicGhvbmVJZFwiOiBcImZkMWYzNjIxLWQ5OWEtNDE4My04OTRiLTU5YWE5ODMyNTY1YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDE4NSxcbiAgICAgIDQ1LFxuICAgICAgMTE1LFxuICAgICAgMjI2LFxuICAgICAgMjA1LFxuICAgICAgMTY1LFxuICAgICAgMTk5LFxuICAgICAgMTQ4LFxuICAgICAgMjYsXG4gICAgICAxMDMsXG4gICAgICAyNCxcbiAgICAgIDYzLFxuICAgICAgMTk0LFxuICAgICAgMjA0LFxuICAgICAgMTA2LFxuICAgICAgODYsXG4gICAgICAxODUsXG4gICAgICAzMSxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMTE0LFxuICAgICAgMTQ5LFxuICAgICAgNDEsXG4gICAgICAyMTUsXG4gICAgICAxNzMsXG4gICAgICA1NixcbiAgICAgIDIxNixcbiAgICAgIDE4NSxcbiAgICAgIDIyOSxcbiAgICAgIDI0MCxcbiAgICAgIDEsXG4gICAgICAxODksXG4gICAgICAyMDIsXG4gICAgICAyMTksXG4gICAgICAxMCxcbiAgICAgIDE4NixcbiAgICAgIDIyMixcbiAgICAgIDc3LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVWWE0zNTYyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NjE3NjMyODkxNDo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM4NjQxNTQ0MzE2NjI6NjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0s2cElrRkVQcjFsN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3RG4xWTJmMUZ5MWo2eDloWWo5dUFoNkJXVVJMUnh0K1F6SDBJUThySFZBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjUyaTJLaHFNMys4N3M3RWlRdTNSSC9kblNVUFlscSsvNXplTmhDeEkrRkM5V2hwZGszWkZlQ3dML05FVnFlS1RPbjJlWXZucWhtRkJSbm1OdElVaERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNJQm1UY0ROTUVtWEUyL2pyTkhDOFVBbUoxZ0llbG5EMVdjK0RibEtkRC9oRDhNUVBqTnZxMkZvcHU5T29ob1N0M3ErdytRUFJnbC9Nc1lOa3JTT0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk2MTc2MzI4OTE0OjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNTQyMzM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR3ZUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHdlQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvblJNaWJ5dnZWOXpuK1QwV3FHZWo2VVdRQ0JCNVh0SW1uSzBaQ0pXdVNzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNjE2NDg5MjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
