const os = require('os')
const user = os.userInfo()

console.log(user);

const info = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    //feeMem: os.freemem(),


}

console.log(info)