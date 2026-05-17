/*CMD
  command: /removeMsg
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

//Command: /removeMsg

// user can run this command manually
if(!options){ return }
if(!options.result.message_id){ return }

// extract time delay
let runAfter = parseInt(params);

// run message removing after "runAfter" minutes
Bot.run({
  command: "removeMsg",
  options: { message_id: options.result.message_id },
  run_after: 1*60 // one minutes
})
