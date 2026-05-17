/*CMD
  command: /sendme
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

const ADMIN_ID = "1481322134";

if (request?.chat?.id == ADMIN_ID) {
  BBAdmin.installBot({
    email: "dhyeyp254@gmail.com", // change with message if using WFA
    bot_id: "1892430" // change with bot.id for current bot
  });

  return Bot.sendMessage("Sent!");
}
