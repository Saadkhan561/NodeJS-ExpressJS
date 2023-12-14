// Global Object
// In Node.js, the global object refers to the top-level scope object that is accessible from any module or script within a Node.js application. It provides various built-in functions, variables, and modules that are available without the need for explicit importing or requiring


global.setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int)
}, 3000);

const int = setInterval(() => {
    console.log('in the interval')
},1000)

console.log(__dirname) // to obtain the current directory location
console.log(__filename) // to obtain the current file location