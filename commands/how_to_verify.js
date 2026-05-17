/*CMD
  command: how_to_verify
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

// Command: /sendvideo
// Code by @Teleservice_Assistant_bot

// Replace with the video file ID or URL
var videoFileId = "https://t.me/HowToVerifyInBot/9"; // If using a file ID
// var videoUrl = "https://example.com/path/to/your/video.mp4"; // If using a video URL

Api.sendVideo({
    chat_id: user.telegramid, // The user's chat ID
    video: videoFileId, // Use videoUrl if you want to send a video from a URL
    caption: "*HOW TO OPEN inshorturl LINKS ?\n\nWatch This Video 📷\n\nDon't click on any ads.  Just wait*",
    parse_mode: "Markdown"
});
