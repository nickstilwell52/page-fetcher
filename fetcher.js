const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
if (args.length != 1) {
  console.log('please provide just the url');
  return;
}

args[0] = 'http://www.' + args[0];

request(args[0], (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  fs.writeFile('test.txt', body, err => {
    if (err) {
      console.error(err);
    }
  });
});