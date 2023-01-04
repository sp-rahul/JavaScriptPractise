const path = require('path');
const a1 = path.basename('C:\\temp\\myfile.html');
console.log(a1)
const a2 = path.dirname('C:\\temp\\myfile.html');
console.log(a2)
const a3 = path.delimiter
console.log(a3)
console.log(path.isAbsolute('/foo/bar'));
console.log(path.parse('/home/user/dir/file.txt'));


