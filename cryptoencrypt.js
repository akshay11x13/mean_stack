var crypto=require('crypto');
const secret='abcdefg';
const hash=crypto.createHmac('sha256',secret).update('password').digest('hex');
console.log(hash);