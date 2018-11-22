const worker = require('./workers/worker');

var socketIO;

module.exports = {
    init: function(io) {
        socketIO = io;
        io.on('connection', function(socket){
            console.log('a user connected: ' + socket.id);
            socket.on('disconnect', function(){
                console.log('user disconnected');
            });

            socket.on('start', function(data) {
                if (data.type === 'download') {
                    var job = worker.downloadImage(data.url);
                    job.on('start', function() {
                        io.emit('start', {id : job.id});
                    });

                    job.on('complete', function() {
                        io.emit('complete', {id : job.id});
                    });
                } else if (data.type == 'build') {
                    var job = worker.build();
                    job.on('start', function() {
                        io.emit('start', {id : job.id});
                    });

                    job.on('complete', function() {
                        io.emit('complete', {id : job.id});
                    });

                    job.on('progress', function(progress, data){
                        console.log('\r  job #' + job.id + ' ' + progress + '% complete with data ', data );
                        io.emit('log', {id: job.id, log: data});
                    });
                }
            })
        });
    },
    io : socketIO
};