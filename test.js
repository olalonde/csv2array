var csv = require('./index');

var str = '"aaaa","bbbb"\n"ccc", "dddd"';

console.log(str);

csv(str, { delimiter: '"' });
