const kue = require('kue')
, queue = kue.createQueue()
, downloadImage = require('./download-image');

const exec = require('child_process').exec;

function downloadImageJob(job, done) {
	downloadImage(job.data.url).then(() => {
		console.log('download done');
		done();
	})
}

function doJob(job, done) {
	let command = 'pwd;';
    var child = exec(command);

    child.stdout.on('data', function(data) {
		job.progress(0, 1, data);
	});

	child.stderr.on('data', function(data) {
    	done(data);
	});

	child.on('close', function(code) {
    	console.log('closing code: ' + code);
    	done(null); 
	});
}

queue.process( 'startdownload', 1, downloadImageJob);
queue.process( 'xcodebuild', 1, doJob);

module.exports = {
	queue: queue,
	downloadImage: (url) => {
		var job = queue.create('startdownload', {url: url}).save(function(error) {
			if (!error) console.log(job.id);
			else console.log(error);
		});
		return job;
	},
	build: () => {
		var job = queue.create('xcodebuild').save(function(error) {
			if (!error) console.log(job.id);
			else console.log(error);
		});
		return job;
	}
}