// require the User and Scooter classes - see where they can be used in ScooterApp.js
const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this._stations = {
      Station1: [],
      Station2: [],
      Station3: [],
    };
    this._registeredUsers = {};
  }

  static isValidUser(username, age) {
    if (age < 18) {
      throw new Error('User is too young to register');
    }
    if (!username) {
      throw new Error('Invalid username');
    }
  }

  registerUser(username, password, age) {
    ScooterApp.isValidUser(username, age);
    if (this._registeredUsers[username]) {
      throw new Error('User is already registered');
    }
    const user = new User(username, password, age);
    this._registeredUsers[username] = user;
    return user;
  }

  loginUser(username, password) {
    const user = this._registeredUsers[username];
    if (!user) {
      throw new Error('Username or password is incorrect');
    }
    user.login(password);
  }

  createScooter(station) {
    if (!this._stations[station]) {
      throw new Error('No such station');
    }
    const scooter = new Scooter(station);
    this._stations[station].push(scooter);
    return scooter;
  }

  rentScooter(scooter, user) {
    const station = scooter.station;
    if (station) {
      this._stations[station] = this._stations[station].filter(s => s !== scooter);
      scooter.rent(user);
    } else {
      throw new Error('Scooter already rented');
    }
  }

  print() {
    console.log('Registered Users:', this._registeredUsers);
    console.log('Stations and Scooters:', this._stations);
  }
}

module.exports = ScooterApp
