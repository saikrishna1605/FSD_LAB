const os =require('os');
// console.log(os);
function tracking(){
    setInterval(()=>{
        const free=os.freemem();
        const total=os.totalmem();
        let percent=((free/total)*100).toFixed(2);
        console.log(`Current Free Memory is ${free}`);
        console.log(`The percentage of Free Memory is ${percent}`)
    },5000);
}
tracking();
