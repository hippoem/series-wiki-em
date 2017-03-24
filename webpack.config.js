const webpact = require('webpact');
const path = require('path');

module.exports = {
    // เปิดใช้งาน sourcemap ด้วยโหมด eval
    devtool: 'eval',

    // ตรงจุดนี้สำคัญครับ! จุดเริ่มต้นของโปรแกรมเราคือ index.js
    // Dashboard.js หรือ Article.js จะเข้าถึงได้ก็ต้องผ่านไฟล์นี้
    // เราจึงบอกว่า index.js เป็น "entry" หรือทางเข้าถึงของโมดูลอื่น

    entry: './index.js',
    output: {
        publicPath: '/static',
        path: path.join(__dirname, 'static'),

        // หลักจากรวมร่างทุกไฟล์เข้าเป็นไฟล์เดียวแล้ว ให้ไฟล์เดียวนั้นชื่ออะไร
        filename: 'bundle.js'
    }
}