/*CMD
  command: /short
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

HTTP.get({
    url: "http://tinyurl.com/api-create.php?url="+encodeURI(params),
    success: "onSuccess"
  })
Bot.sendMessage("*Direct link: *"+encodeURI(params)+"") 
