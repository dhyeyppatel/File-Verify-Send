/*CMD
  command: /handle
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Fix By @Teleservice_Assistant_bot

if (message == "✅") {
    if (options && options.shrt) {
        var filesList = Bot.getProperty(options.shrt, []);
        if (filesList.length > 0) {
            return Bot.runCommand("/short https://t.me/" + bot.name + "/?start=" + options.shrt);
        } else {
            return Bot.sendMessage("Error: No files uploaded or message added to confirm.");
        }
    } else {
        return Bot.sendMessage("Error: No files uploaded or message added to confirm.");
    }
}

var shrt = (new Date().getTime()).toString(36);
if (options && options.shrt) {
    shrt = options.shrt;
}

var filesList = Bot.getProperty(shrt, []);
var fileEntry = {};

// Check for different media types
if (request.video && request.video.file_id) {
    fileEntry = { type: "video", file_id: request.video.file_id, caption: request.caption || "" };
} else if (request.photo && request.photo.length > 0 && request.photo[0].file_id) {
    fileEntry = { type: "photo", file_id: request.photo[0].file_id, caption: request.caption || "" };
} else if (request.audio && request.audio.file_id) {
    fileEntry = { type: "audio", file_id: request.audio.file_id, caption: request.caption || "" };
} else if (request.sticker && request.sticker.file_id) {
    fileEntry = { type: "sticker", file_id: request.sticker.file_id };
} else if (request.document && request.document.file_id) {
    fileEntry = { type: "document", file_id: request.document.file_id, caption: request.caption || "" };
} else if (request.animation && request.animation.file_id) {
    fileEntry = { type: "animation", file_id: request.animation.file_id, caption: request.animation.caption || "" };
} else if (request.voice && request.voice.file_id) {
    fileEntry = { type: "voice", file_id: request.voice.file_id, caption: request.caption || "" };
} else if (message && message.length > 0) {
    fileEntry = { type: "text", content: message };
}

// Check if a valid fileEntry was created
if (Object.keys(fileEntry).length > 0) {
    filesList.push(fileEntry);
    Bot.setProperty(shrt, filesList, "json");
    Bot.runCommand('/handle', { shrt: shrt });
} else {
    Bot.sendMessage("No valid media file or message detected. Please send a valid media file or type a message.");
}
