class Scooter {
  // scooter code here
  static nextSerial = 1;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100; // Initially fully charged
    this.isBroken = false;
  }

  rent(user) {
    if (this.charge <= 20) {
      throw new Error('Scooter needs to charge');
    }
    if (this.isBroken) {
      throw new Error('Scooter needs repair');
    }
    if (this.user !== null) {
      throw new Error('Scooter already rented');
    }

    this.user = user;
    this.station = null;
    console.log(`Scooter ${this.serial} is rented to ${user.username}`);
  }

  dock(station) {
    if (this.station) {
      throw new Error('Scooter already at station');
    }

    this.station = station;
    this.user = null;
    console.log(`Scooter ${this.serial} is docked at ${station}`);
  }
}

module.exports = Scooter
