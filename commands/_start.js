/*CMD
  command: /start
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

// Command: /start
const done = User.getProp("done");

// Check for the "VerifyMe" parameter
if (params && params === "VerifyMe") {
    Bot.runCommand("/verifyIsTrue"); // Run the /verify command
    return; // Exit the current command after running /verify
}

if (!done) {
    User.setProp("done", user.telegramid, "text");
}

const id = params;
var already = User.getProperty("already");

if (!already) {
    User.setProperty("already", user.telegramid, "text");
}

var userStat = User.getProperty("userStatus");
var channels = ["@commonthread"]; // Your channel username
let userId = user.telegramid;

// Check if user is a member
// Code by @Teleservice_Assistant_bot
if (params) {
    // If there are parameters, run the next command
    Api.getChatMember({
        chat_id: channels[0],
        user_id: userId,
        on_result: "/check_start " + id // Replace with your next command name
    });
} else {
    // If no parameters, send an inline button with a photo
    var button = [
        [
            {
                text: "Join Channel",
                url: "https://t.me/commonthread" // Replace with your channel link
            }
        ]
    ];

    var welcomeMessage = "<b>Welcome to the Bot!</b>\n<b>Join our channel for updates! 😇</b>";
    var photoUrl = "http://hoster.rf.gd/uploads/IMG_20250210_063014_993.jpg"; // Replace with your photo URL

    Api.sendPhoto({
        photo: photoUrl,
        caption: welcomeMessage,
        parse_mode: "html",
        reply_markup: {
            inline_keyboard: button
        }
    });
}
