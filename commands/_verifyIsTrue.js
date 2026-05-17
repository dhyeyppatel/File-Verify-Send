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

User.setProperty("Verified", true, "string");
Bot.runCommand("/cancel_verify");

Api.sendMessage({
    chat_id: user.telegramid,
    text: `*Hᴇʏ ${user.first_name} 👋\n\nYᴏᴜ Aʀᴇ Nᴏᴡ Vᴇʀɪғɪᴇᴅ Fᴏʀ Tᴏᴅᴀʏ ✓, Eɴᴊᴏʏ Uɴʟɪᴍɪᴛᴇᴅ Mᴏᴠɪᴇs Oʀ Sᴇʀɪᴇs 😎.*`,
    parse_mode: "Markdown",
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: "💬 Connect to Support", url: "tg://user?id=1481322134" }]
        ]
    }),
    message_effect_id: "5046509860389126442" // Optional, if you need to include it
});;
