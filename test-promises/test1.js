let promise1 = new Promise(function(resolve, reject) {
	console.log("quac quac");
	resolve();
})

// let promise2 = new Promise(function(resolve, reject) {
// 	setTimeout(function() {
// 		console.log("hoho");
// 		//resolve();
// 		reject(new Error("hum"));
// 	}, 2000);
// })

// Promise.all([promise1, promise2])
// .then(() => {
// 	console.log("1");
// })
// .catch(error => {
// 	console.log("2");
// });

promise1
.then(() => {
	console.log("hihi")
})

console.log("kho qua ban oi");

/*promise1
.then(() => {
	return promise2;
})
.catch((err) => {
	console.log("1");
})
.then(() => {
	console.log("2");
})
.catch((err) => {
	console.log("3");
})*/