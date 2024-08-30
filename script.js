var os = require('os');

console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

var freeMemory = os.freemem() / (1024 * 1024 * 1024);
var totalMemory = os.totalmem() / (1024 * 1024 * 1024);
var usedMemory = totalMemory - freeMemory;

console.log("User Memory: " + (usedMemory).toFixed(2));
console.log("Free Memory: " + (freeMemory).toFixed(2));
console.log("Total Memory: " + (totalMemory).toFixed(2));


window.onload = function(){
    document.getElementById('totalMemory').innerHTML = "Hello!";
};
