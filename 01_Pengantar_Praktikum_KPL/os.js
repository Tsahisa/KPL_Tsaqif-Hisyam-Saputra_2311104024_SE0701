import os from "os";

console.info(os.platform());
console.info(os.arch());
console.info(os.cpus());
console.info(os.totaltime());
console.info(os.freemem());
console.table(os.networkInterfaces());