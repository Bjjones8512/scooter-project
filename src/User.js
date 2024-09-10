class User {
  // User code here
  constructor(username, password, age) {
    this._username = username;
    this._password = password;
    this._age = age;
    this._loggedIn = false;
  }

  // Getter methods
  get username() {
    return this._username;
  }

  get age() {
    return this._age;
  }

  get loggedIn() {
    return this._loggedIn;
  }

  login(password) {
    if (this._password === password) {
      this._loggedIn = true;
    } else {
      throw new Error('Incorrect password');
    }
  }

  logout() {
    this._loggedIn = false;
  }
}

module.exports = User
