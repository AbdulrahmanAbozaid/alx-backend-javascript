import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' || typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new TypeError('amount, conversionRate must be numbers');
  }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else throw new TypeError('amount must be a string');
  }

  get amount() {
    return this._amount;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else throw new TypeError('currency must be a Currency instance');
  }

  get currency() {
    return this._currency;
  }
}
