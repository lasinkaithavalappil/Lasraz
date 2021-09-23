const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/20210922_202155_1.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is Lasin Ahamed*
*Creator number : wa.me/919544980529?text=Hi%20Lasin%20Ahamed.%20*
*Githublink (Setup)  :    https://github.com/lasinkaithavalappil/Lasraz*
*Audio commads :   https://github.com/lasinkaithavalappil/Lasraz/tree/master/uploads*
*Sticker commads : https://github.com/lasinkaithavalappil/Lasraz/tree/master/uploads*
`}) 

}));
