const User = require('../src/User')

const user = new User('Joe Bloggs', 'test123', 21)

// User tests here
describe('User property tests', () => {
  // test username
  test('username should be a string', () => {
    expect(typeof user.username).toBe('string')
  })
  // test password
  test('should have a correct password set', () => {
    expect(user.password).toBe('test123');
  });

  // test age
  test('should have the correct age set', () => {
    expect(user.age).toBe(21);
})

// test login
test('should log in with the correct password', () => {
  user.login('test123');
  expect(user.loggedIn).toBe(true);
});

test('should throw an error if the password is incorrect', () => {
  expect(() => user.login('wrongPassword')).toThrow('Incorrect password');
});

// test logout
test('should log out successfully', () => {
  user.login('test123'); // Log in first
  user.logout(); // Log out
  expect(user.loggedIn).toBe(false);
});
})