/*CMD
  command: /check_start
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

if (User.getProperty("Verified")) { // Check if the user is verified
    if (params) {
        var files = Bot.getProperty(params);
        if (files && files.length > 0) {
            files.forEach(file => {
                switch (file.type) {
                    case "video":
                        Api.sendVideo({ video: file.file_id, caption: file.caption || undefined, on_result: "/removeMsg" });
                        break;
                    case "photo":
                        Api.sendPhoto({ photo: file.file_id, caption: file.caption || undefined, on_result: "/removeMsg" });
                        break;
                    case "audio":
                        Api.sendAudio({ audio: file.file_id, caption: file.caption || undefined, on_result: "/removeMsg" });
                        break;
                    case "sticker":
                        Api.sendSticker({ sticker: file.file_id, on_result: "/removeMsg" });
                        break;
                    case "document":
                        Api.sendDocument({ document: file.file_id, caption: file.caption || undefined, on_result: "/removeMsg" });
                        break;
                    case "animation":
                        Api.sendAnimation({ animation: file.file_id, caption: file.caption || undefined, on_result: "/removeMsg" });
                        break;
                    case "voice":
                        Api.sendVoice({ voice: file.file_id, caption: file.caption || undefined, on_result: "/removeMsg" });
                        break;
                    case "text":
                        Api.sendMessage({ text: file.text, disable_web_page_preview: true, on_result: "/removeMsg" });
                        break;
                }
            });
            Bot.sendMessage("⚠️ 𝖳𝗁𝗂𝗌 𝗆𝖾𝖽𝗂𝖺 𝗐𝗂𝗅𝗅 𝖻𝖾 𝖽𝖾𝗅𝖾𝗍𝖾𝖽 𝗐𝗂𝗍𝗁𝗂𝗇 𝟣 𝗆𝗂𝗇𝗎𝗍𝖾. 𝖪𝗂𝗇𝖽𝗅𝗒 𝖿𝗈𝗋𝗐𝖺𝗋𝖽 𝗂𝗍 𝗍𝗈 𝗌𝖺𝗏𝖾𝖽 𝗆𝖾𝗌𝗌𝖺𝗀𝖾𝗌.");
        } else {
            // Handle case where no files found
            Bot.sendMessage("No files found with the given parameters.");
        }
    }
} else {
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

    // Save the pending file ID so we can send it after verification
    if (params) {
        User.setProperty("pendingFile", params, "string");
    }

    // If the user is not verified, send a random link with inline buttons
    var randomLink = "https://modijiurl.com/fillsharebot"; // Replace with your desired random link
    var buttons = [
        [
            { text: "⚠ Vᴇʀɪғʏ ⚠", url: randomLink } // First row
        ],
        [
            { text: "❗️Hᴏᴡ Tᴏ Vᴇʀɪғʏ❗️", callback_data: "how_to_verify" } // Second row
        ]
    ];
    
    Api.sendMessage({
        text: "*👋 Hᴇʏ "+user.first_name+",\n\n📌 ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴠᴇʀɪғɪᴇᴅ ᴛᴏᴅᴀʏ, ᴘʟᴇᴀsᴇ ᴄʟɪᴄᴋ ᴏɴ ᴠᴇʀɪғʏ & ɢᴇᴛ ᴜɴʟɪᴍɪᴛᴇᴅ ᴀᴄᴄᴇss ғᴏʀ ᴛɪʟʟ ɴᴇxᴛ ᴠᴇʀɪғɪᴄᴀᴛɪᴏɴ\n\n#ᴠᴇʀɪғɪᴄᴀᴛɪᴏɴ ✓*",
        parse_mode: "Markdown",
        reply_markup: { inline_keyboard: buttons }
    });
}
