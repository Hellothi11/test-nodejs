const myError = new Error('Problem!');
Promise.reject(myError)
.catch(err => console.log(err === myError)); // true