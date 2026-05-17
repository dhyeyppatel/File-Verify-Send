/*CMD
  command: /broadcast_worker
  help: Worker for broadcast
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: admin
CMD*/

// Ensure options are passed
if (options && options.msg) {
    // Bot.sendMessage automatically sends to the current user in runAll context
    Bot.sendMessage(options.msg);
}
