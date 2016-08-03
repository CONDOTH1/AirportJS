

var Airport = function() {
  this.terminal = [];
  weather = new Weather
}

Airport.prototype.land = function(plane) {
  if (this.confirmLanding(plane)) {
    if (weather.stormy() === false){
    this.terminal.push(plane);
    return "clear to land"
  }
}
  return "Plane already landed"
}

Airport.prototype.takeOff = function(plane) {
    if (this.terminal.remove(plane) === false) {
    return "Plane already left"
    }
    else if (weather.stormy() === false){
    this.terminal.remove(plane)
    return "clear to take off"
    }
  }


Airport.prototype.confirmLanding = function(plane) {
  return plane.flying;
}
