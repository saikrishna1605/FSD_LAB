const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.once('event', () => {
  console.log('The event was emitted for the first time!');
});
eventEmitter.emit('event');
eventEmitter.emit('event');