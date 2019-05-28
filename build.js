const fs = require('fs');
const child_process = require('child_process');
function copyFile(from , to) {
  fs.writeFileSync(to, fs.readFileSync(from))
}

function copyDir(src, dist) {
  child_process.spawn('cp', ['-r', src, dist]);
}
console.log('开始拷贝.nuxt文件夹')
copyDir('./.nuxt', 'server/.nuxt')

