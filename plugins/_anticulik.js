let handler = m => m

handler.all = async function (m) {
    if (m.mtype === 'groupInviteMessage') {
        m.reply(`Untuk mengundang bot ke dalam grup silahkan Ijin Owner terlebih dahulu`)
        this.sendContact(m.chat, '6289616061778', 'kotorichan', m)
    }
}

module.exports = handler
