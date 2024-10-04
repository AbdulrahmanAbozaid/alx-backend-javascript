export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get [Symbol.species]() {
    return this.constructor;
  }

  cloneCar() {
    const Cari = this.constructor[Symbol.species] || this.constructor;
    return new Cari();
  }
}
