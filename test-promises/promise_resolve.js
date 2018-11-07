Promise.resolve('abc').then(x => console.log(x));

const p = new Promise(() => null);
console.log(Promise.resolve(p) === p); // true

const fulfilledThenable = {
      then(reaction) {
          reaction('hello');
      }
  };

const promise = Promise.resolve(fulfilledThenable);
console.log(promise instanceof Promise); // true
promise.then(x => console.log(x)); // hello