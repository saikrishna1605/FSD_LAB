const os=require('os');
function fetchDetails(){
    const free=os.freemem();
    const total=os.totalmem();
    const hostname=os.hostname();
    const uptime=os.uptime();
    const platform=os.platform();
    console.log(`The Host Name of the system is ${hostname}`);
    console.log(`The Platform is ${platform}`);
    console.log(`The system's uptime is ${uptime}`);
    console.log(`The total memory is ${total}`);
    console.log(`The Free memory is ${free}`);
}
fetchDetails();