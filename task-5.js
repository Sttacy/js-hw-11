class Car {
  constructor({ maxSpeed, speed = 0, isOn = false, distance = 0, price } = {}) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price;
  }

  getSpecs() {
    console.log(
      `Max speed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance}, price: ${this._price}`
    );
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    return (this.speed = 0);
  }
  accelerate(value) {
    value < this.maxSpeed
      ? (this.speed += value)
      : "Перевищена максимальна швидкість";
  }

  decelerate(value) {
    value > 0 ? (this.speed -= value) : "Швидкість менше нуля";
  }

  drive(hours) {
    this.isOn ? (this.distance += hours * this.speed) : "Машина не заведена";
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

mustang.getSpecs();

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

mustang.getSpecs();

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
