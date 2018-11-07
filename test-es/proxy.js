const u = { age: null };
const p = new Proxy(u, {
  set(target, prop, val) {
    if (prop === 'age' && typeof val !== 'number') throw new TypeError('Age must be a number')
    console.log('set roi ne ban oi');
    target[prop] = val
    return true
  }
});

// p.age = '10' // Error: Age must be a number
p.age = 10   // OK!
