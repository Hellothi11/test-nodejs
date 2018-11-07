let fs = require('fs');

function readFile(filename, enc){
  return new Promise(function (fulfill, reject){
    fs.readFile(filename, enc, function (err, res){
      if (err) reject(err);
      else fulfill(res);
    });
  });
}

let a = readFile('package.json', 'utf8');
a.then(res => {
	console.log('res: ' + res);
}).catch(err => {
	console.log('error: ' + err);
});
