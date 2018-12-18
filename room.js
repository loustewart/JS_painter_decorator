const Room = function(area, painted, can_be_painted, decorator){
  this.area = area;
  this.painted = painted;
  this.canBePainted = can_be_painted;
  this.decoratorName = decorator.name;
  this.decoratorStock = decorator.stock;
}


Room.prototype.decoratorCanPaint = function(decorator){
  if(decorator.beginPainting(this) === true){
    return true
  }
  return false
}

module.exports = Room;
