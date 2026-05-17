/*CMD
  command: /verifyIsTrue
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

// Code by @Teleservice_Assistant_bot

User.setProperty("Verified", true, "boolean");
Bot.runCommand("/cancel_verify");

Api.sendMessage({
    chat_id: user.telegramid,
    text: `*Hᴇʏ ${user.first_name} 👋\n\nYᴏᴜ Aʀᴇ Nᴏᴡ Vᴇʀɪғɪᴇᴅ Fᴏʀ Tᴏᴅᴀʏ ✓, Eɴᴊᴏʏ Uɴʟɪᴍɪᴛᴇᴅ Mᴏᴠɪᴇs Oʀ Sᴇʀɪᴇs 😎.*`,
    parse_mode: "Markdown",
    reply_markup: {
        inline_keyboard: [
            [{ text: "💬 Connect to Support", url: "tg://user?id=1481322134" }]
        ]
    }
});

// Check if we saved a pending file request, or if the parameter contains the file code
var pendingFile = User.getProperty("pendingFile");
if (pendingFile) {
    Bot.runCommand("/check_start " + pendingFile);
    User.setProperty("pendingFile", null, "string"); // Clear it
}
