const Paint = require('./paint.js')
const Room = require('./room.js')

const Decorator = function(name, stock, paint){
  this.name = name;
  this.stock = stock;
  this.paintLitres = paint.litres;
}

const paint = new Paint(10);
Decorator.prototype.addToStock = function(){
  this.stock.push(paint)
}

Decorator.prototype.totalLitres = function(){
  return this.stock.length * this.paintLitres
}

Decorator.prototype.enoughPaint = function(room){
  if(room.area <= this.totalLitres()){
    return true
  }
  return false
}

Decorator.prototype.beginPainting = function(room){
  if(this.enoughPaint(room) === true){
    return true
  }
  return false
}




module.exports = Decorator;
