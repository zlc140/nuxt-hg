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
console.log('开始拷贝static文件夹')
copyDir('./static','server/static')
console.log('开始拷贝package.json文件')
copyFile('./package.json', 'server/package.json')

