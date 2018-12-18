const assert = require('assert')
const Room = require('../room.js')
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')


let room;
let decorator;
let paint;


describe('Room', function(){
    beforeEach(function(){
    paint = new Paint(10)
    decorator = new Decorator('James', [], paint)
    room = new Room(10, false, true, decorator)
  });

  describe('Decorator', function(){
    it('should have a name', function(){
      const actual = room.decoratorName;
      assert.deepStrictEqual(actual, 'James');
    });

    it('should have no stock', function(){
      const actual = room.decoratorStock.length;
      assert.deepStrictEqual(actual, 0);
    })

    it('should be able to buy paint', function(){
      decorator.addToStock()
      const actual = decorator.stock.length;
      assert.deepStrictEqual(actual, 1);
    })

    it('should calcualte litres of paint', function(){
      decorator.addToStock()
      const actual = decorator.totalLitres()
      assert.deepStrictEqual(actual, 10);
    })

    it('does decorator have enough paint to paint room', function(){
      decorator.addToStock()
      const actual = decorator.enoughPaint(room)
      assert.deepStrictEqual(actual, true);
    })

    it('does decorator have enough paint to paint room 2', function(){
      const actual = decorator.enoughPaint(room)
      assert.deepStrictEqual(actual, false);
    })

    it('I can paint your room', function(){
      decorator.addToStock()
      const actual = decorator.beginPainting(room)
      assert.strictEqual(actual, true);
    })

    it('I cannot paint your room', function(){
      const actual = decorator.beginPainting(room)
      assert.strictEqual(actual, false);
    })



  });

  describe('Paint', function(){
    it('should have a number of litres', function(){
        const actual = decorator.paintLitres;
        assert.strictEqual(actual, 10);
    });
  });

  it('should have an area', function(){
    //act
    const actual = room.area;

    //assert
    assert.strictEqual(actual, 10);

  });
  it('should not be painted', function(){
    const actual = room.painted;
    assert.strictEqual(actual, false);
  });

  it('has potential', function(){
    const actual = room.canBePainted;
    assert.strictEqual(actual, true);
  });

  it('room can be painted by decorator', function(){
    decorator.addToStock()
    const actual = room.decoratorCanPaint(decorator);
    assert.deepStrictEqual(actual, true);
  })




});
