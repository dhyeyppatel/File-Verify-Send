/*CMD
  command: /onLoading
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

var data = JSON.parse(content);
var link = data.shortenedUrl;
//Bot.sendMessage(link);
var inlineButtons = [
        [
            {
                text: "First Button",
                url: link, // Replace with your action
            }
        ],
        [
            {
                text: "Second Button",
                callback_data: "second_button_action" // Replace with your action
            }
        ]
    ];

    // Message to send along with inline buttons
    var messageText = "Here are your options:";

    // Send the message with inline buttons
    Api.sendMessage({
        chat_id: user.telegramid, // Send to the user who invoked the command
        text: messageText,
        reply_markup: {
            inline_keyboard: inlineButtons // Attach the inline keyboard
        }
    });
