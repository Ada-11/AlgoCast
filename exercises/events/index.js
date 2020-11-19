// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor(){
    this.stack = {} //key with array values for each event
  }
  // Register an event handler
  on(eventName, callback) {
    if(this.stack[eventName]){
      this.stack[eventName].push(callback)
    }else{
      this.stack[eventName]=[callback] //initiated with an array and callback inside
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if ( this.stack[eventName]){
      for ( let cback of this.stack[eventName]) cback()
    }

  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if(this.stack[eventName]) {
      delete this.stack[eventName]
  }
}
}

module.exports = Events;
