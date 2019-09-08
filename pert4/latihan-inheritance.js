class Shape {
  constructor(length, width) {
    this.length = length
    this.width = width
  }

  getArea() {
    return null;
  }

  getPerimeter() {
    return null;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super(length, width)
  }

  // getter
  get area() {
    return this.length * this.width
  }

  // getter
  get perimeter() {
    return 2 * ( this.length + this.width )
  }

  // setter
  set panjang(value) {
    this.length = value
    console.log('panjang diubah')
  }

  // setter
  set lebar(value) {
    this.width = value
    console.log('lebar diubah')
  }

  // method static - method yg bs dipakai tanpa bikin object dari sebuah class
  static describe() {
    console.log('Ini adalah sebuah kotak')
  }
}

const kotak1 = new Rectangle(20, 30)
kotak1.panjang = 5
kotak1.lebar = 10
console.log(kotak1.area)
console.log(kotak1.perimeter)

Rectangle.describe()
