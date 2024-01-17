const fs = require('fs')
const chalk = require('chalk')

//OWNER
global.owner = ['62895360841074']
global.nomerOwner = '62895360841074' 
global.botName = 'Neko'
global.ownerName = 'Putra'
global.sessionName = 'nyan~' //JANGAN DI GANTI

//DIGIFLAZZ 
username = 'tisiseo6zJvo'
apiKey = 'PRODUCTIONKEYDIGI0895360841074'

// TOKOPAY
merchant = 'M231225XOJYG455'
secretKey = '9fb5633301c44baa3d312c0bfe133b830cd4e1f22c9f63074abb430e9f693e53'

// TRIPAY
kodePG = 'T27679'
apiKeyPG = 'aCTCXYU9uKlu4AmQX2hxPjL6KTAKcHhqll3DNeWB'
privateKeyPG = 'NI6PZ-JaMWT-VIgFi-Lud4L-o89DU'
trxUrl = 'https://tripay.co.id/api/transaction/create'
statusUrl = 'https://tripay.co.id/api/transaction/detail' 

//MONGODB 
uri = 'mongodb+srv://Putra:putra@bam.phk7k.mongodb.net'
dbName = 'neko'
collectionUsers = 'users'
collectionUser = 'user'
collectionDepo = 'depo'
collectionTrx = 'trx'
collectionMarkup = 'markup'
collectionEw = 'ewallet'
collectionCommands = 'cmd'

//EMBED
linkGC = 'https://chat.whatsapp.com/EHACJBQkNXj9ahVAnKRGke'
poster1 = 'https://telegra.ph/file/267ad2a82db9bed8b5a2f.jpg'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})