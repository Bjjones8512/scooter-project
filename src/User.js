class User {
  // User code here
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if (this.password === password) {
      this.loggedIn = true;
      console.log(`${this.username} has been logged in.`);
    } else {
      throw new Error('Incorrect password');
    }
  }

  logout() {
    this.loggedIn = false;
    console.log(`${this.username} has been logged out.`);
  }
}

module.exports = User
