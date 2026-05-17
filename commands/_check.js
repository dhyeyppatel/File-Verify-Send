/*CMD
  command: /check
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
    url: "https://api.modijiurl.com/api?api=c34c1539022bd1ec8b3c6020c854eb00f3692655&url=yourdestinationlink.com&alias=B2056",
    success: "/onLoading"
});
