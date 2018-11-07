function delay(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, x);
  });
}

async function asyncAwait() {
	console.log("knock knock!");

	await delay(2000);
	console.log("who's there?");

	await delay(2000);
	console.log("async await");
};

asyncAwait();

console.log("ahihi");