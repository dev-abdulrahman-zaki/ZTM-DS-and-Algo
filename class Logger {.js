class Logger {
  constructor(prefix) {
    this.prefix = prefix;
  }

  log(message) {
    console.log(`${this.prefix}: ${message}`);
  }

  startLogging() {
    // Problem: 'this' is lost in the callback. // Why?
    console.log(this); // Why log is not exist ?   // output: { prefix: 'DEBUG' }
    setTimeout(this.log, 1000, "Lost context");

    const self = this;
    // Solution: Use the stored reference to access methods
    setTimeout(function () {
      self.log("Using self reference"); // 'self' is accessible in closure
    }, 1000);

    setTimeout(function () {
      logger.log.call(logger, "Using call"); // how logger is accessible here ?
    }, 1000);
    // or:
    setTimeout(function () {
      self.log.call(self, "Using call");
    }, 1000);

    // Solution: Bind preserves 'this'
    setTimeout(this.log.bind(this), 1000, "Context preserved");

    // or: use an arrow function
    setTimeout(() => {
      this.log("Arrow function preserves context");
    }, 1000);
  }
}

const logger = new Logger("DEBUG");
logger.startLogging();
