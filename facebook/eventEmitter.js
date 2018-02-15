class Emitter {
  constructor() {
    this.events = {};
  }

  subscribe(event_name, callback) {
    if (!this.events.hasOwnProperty(event_name)) this.events[event_name] = [callback];
    else this.events[event_name].push(callback);

    return {
      release: () => {
        let i = this.events[event_name].indexOf(callback);
        this.events[event_name].splice(i, 1);
        if (!this.events[event_name].length) delete this.events[event_name];
      }
    }
  }

  emit(event_name, ...args) {
    if (!this.events[event_name]) return false;
    this.events[event_name].forEach(el => el.call(this, ...args));
  }
}
emitter = new Emitter();

sub = emitter.subscribe('click', (...args) => console.log(...args));
sub2 = emitter.subscribe('scroll', (...args) => console.log(...args));

sub.release();