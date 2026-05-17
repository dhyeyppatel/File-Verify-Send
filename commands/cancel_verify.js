/*CMD
  command: cancel_verify
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER
*⚠️ Yᴏᴜ'ʀᴇ Vᴇʀɪғɪᴄᴀᴛɪᴏɴ Hᴀs Bᴇᴇɴ Tɪᴍᴇ-ᴏᴜᴛ.

❗️Vᴇʀɪғʏ Aɢᴀɪɴ Tᴏ Usᴇ Bᴏᴛ❗️

#VᴇʀɪғʏAɢᴀɪɴ*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.deleteProp("Verified"); // Delete the 'Verified' property

