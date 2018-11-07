console.log("---Start");

var fs = require('fs');

var c = fs.readFileSync('package.json', 'utf8');
console.log("sync: \n" + c);

fs.readFile('package.json', 'utf8', function(err, contents) {
    console.log("async: \n" + contents);
});

function readJSON(filename, callback){
  fs.readFile(filename, 'utf8', function (err, res){
    if (err) return callback(err);
    callback(null, JSON.parse(res));
  });
}

console.log('readjson');
readJSON('package.json', (err, res) => {
	console.log(err + ": " + res.name);
});

function readJSON2(filename, callback){
  fs.readFile(filename, 'utf8', function (err, res){
    if (err) return callback(err);
    try {
      res = JSON.parse(res);
    } catch (ex) {
      return callback(ex);
    }
    callback(null, res);
  });
}

console.log('readjson2');
readJSON('package.json', (err, res) => {
	console.log(err + ": " + res.name);
});

