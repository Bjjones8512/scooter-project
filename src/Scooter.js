class Scooter {
  // scooter code here
  static nextSerial = 1; //Create Serial numbers

  constructor(station) {
    this._station = station;
    this._user = null;
    this._serial = Scooter.nextSerial++; // Static usege
    this._charge = 100;
    this._isBroken = false;
  }
  
  //Use getters and setters for accessing properties
  get station() {
    return this._station;
  }

  get user() {
    return this._user;
  }

  get charge() {
    return this._charge;
  }

  get isBroken() {
    return this._isBroken;
  }

  set isBroken(value) {
    this._isBroken = value;
  }

  rent(user) {
    if (this._charge > 20 && !this._isBroken) {
      this._station = null;
      this._user = user;
    } else if (this._charge <= 20) {
      throw new Error('Scooter needs to charge');
    } else if (this._isBroken) {
      throw new Error('Scooter needs repair');
    }
  }

  dock(station) {
    this._station = station;
    this._user = null;
  }

  recharge() {
    const rechargeInterval = setInterval(() => {
      this._charge += 10;
      if (this._charge >= 100) {
        this._charge = 100;
        clearInterval(rechargeInterval);
      }
    }, 1000);
  }

  requestRepair() {
    setTimeout(() => {
      this._isBroken = false;
      console.log(`Scooter ${this._serial} repair completed.`);
    }, 5000); // Simulate repair after 5 seconds
  }
}

module.exports = Scooter
