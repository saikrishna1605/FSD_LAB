const EventEmitter = require('events');
class EventManagement extends EventEmitter {
    startEvent() {
        console.log("Event started");
        this.emit('start');
    }
    inProgressEvent() {
        console.log("Event in progress");
        this.emit('in-progress');
    }
    completedEvent() {
        console.log("Event completed");
        this.emit('completed');
    }
}
module.exports = EventManagement;