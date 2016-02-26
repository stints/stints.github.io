var Point = function(x, y) {
  this.x = x;
  this.y = y;

  this.distanceFrom(point) {
    var d = Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));

    return d;
  };
}
