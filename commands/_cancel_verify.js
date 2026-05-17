/*CMD
  command: /cancel_verify
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

Bot.run({
    command: "cancel_verify",
    run_after: 24 * 60 * 60 
});
