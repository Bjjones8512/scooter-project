// require the User and Scooter classes - see where they can be used in ScooterApp.js
const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {
      'Station1': [],
      'Station2': [],
      'Station3': []
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error('User already registered');
    }
    if (age < 18) {
      throw new Error('Too young to register');
    }
    const user = new User(username, password, age);
    this.registeredUsers[username] = user;
    return user;
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user || user.password !== password) {
      throw new Error('Username or password is incorrect');
    }
    user.loggedIn = true;
  }

  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user || !user.loggedIn) {
      throw new Error('No such user is logged in');
    }
    user.loggedIn = false;
  }

  rentScooter(scooter, user) {
    if (scooter.user) {
      throw new Error('Scooter already rented');
    }
    scooter.rent(user);
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error('No such station');
    }
    scooter.dock(station);
    this.stations[station].push(scooter);
  }
}

module.exports = ScooterApp;