export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  constructor(x, y) {
    this.x = x;
    this.y = y;

    return new Proxy(this, {
      set() {
        throw new Error('Vector is readonly');
      },
    });
  }

  distance() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2));
  }

  static plus(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  static minus(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  }
}
