import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  const ultah = new Date('Februari 2 2023 00:0:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*Halo bwanh🗿*
ʜᴀɪ ꜱᴀʏᴀ ᴋɪɴɢʙᴏᴛᴠ2 ʏᴀɴɢ ᴅɪ ʙᴜᴀᴛ ᴏʟᴇʜ ᴍᴀᴜʟᴀɴᴀ ᴋᴀʀᴇɴᴀ ᴍᴀʟᴇꜱ ꜰɪx ᴘᴀᴋᴇ ʏᴀɴɢ ᴀᴅᴀ ᴀᴊᴀ.
Kalau Ada Yg Error Bisa Langsung Report Ke Owner.\n`,wm + '\n\n' + botdate, thumbdoc, [['Aʟʟ Mᴇɴᴜ','.? all'],['Lɪsᴛ Mᴇɴᴜ','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `A PUTRA🎧 : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Join Ngab`,          previewType: 0,
                        thumbnail: await (await fetch(`https://i.ibb.co/W25wKFB/y.jpg`)).buffer(),
                        sourceUrl: 'https://chat.whatsapp.com/F9St301rfmhE7xOFBKmvG2'
                      }}
})
}


handler.help = ['menu']
handler.tags = ['group']
handler.command = /^(menu|help|co)$/i
handler.register = false

export default handler
