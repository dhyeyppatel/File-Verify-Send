/*CMD
  command: /broadcast
  help: Admin broadcast command
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please enter the message to broadcast to all users:
  keyboard: 
  aliases: 
  group: admin
CMD*/

const ADMIN_ID = "1481322134"; // Admin ID from _sendme.js

if (user.telegramid != ADMIN_ID) {
    return Bot.sendMessage("You are not authorized to use this command.");
}

// Start the broadcast task
Bot.runAll({
    command: "/broadcast_worker",
    for_chats: "private-chats",
    options: {
        msg: message
    }
});

Bot.sendMessage("Broadcast task has been created and is now running.");
