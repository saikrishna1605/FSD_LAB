const Events=require('events');
const eventEmitter=new Events();
eventEmitter.on('userDetails',(name,age)=>{
    console.log(`Hello, ${name}! You are ${age} years old`);
});
eventEmitter.emit('userDetails','sai',20);
eventEmitter.emit('userDetails','saikrishna',19);