const User = require('../src/User');
const ScooterApp = require('../src/ScooterApp');
const Scooter = require('../src/Scooter');

const app = new ScooterApp();
const scooter = new Scooter('Station1');

// ScooterApp tests here

// Register user
describe('ScooterApp tests', () => {
  let app;
  let scooter;
  let user;

  beforeEach(() => {
    app = new ScooterApp();  // Initialize app before each test
    scooter = new Scooter('Station1');  // New scooter for each test
    user = new User('testUser', 'password123', 21);  // New user for each test
    app.registerUser('testUser', 'password123', 21);  // Register user
  });

  // Register User
  test('should register a new user', () => {
    const newUser = app.registerUser('newUser', 'test123', 25);
    expect(newUser).toBeInstanceOf(User);
  });

  test('should throw error if user already registered', () => {
    expect(() => app.registerUser('testUser', 'password123', 21)).toThrow('User already registered');
  });

  // Login User
  test('should log in registered user with correct password', () => {
    app.loginUser('testUser', 'password123');
    expect(app.registeredUsers['testUser'].loggedIn).toBe(true);
  });

  test('should throw error for incorrect password', () => {
    expect(() => app.loginUser('testUser', 'wrongPassword')).toThrow('Username or password is incorrect');
  });

  // Logout User
  test('should log out user', () => {
    app.loginUser('testUser', 'password123');
    app.logoutUser('testUser');
    expect(app.registeredUsers['testUser'].loggedIn).toBe(false);
  });

  // Rent Scooter
  test('should rent a scooter to a user', () => {
    app.loginUser('testUser', 'password123');
    app.rentScooter(scooter, user);
    expect(scooter.user).toBe(user);
  });

  test('should throw error if scooter is already rented', () => {
    app.loginUser('testUser', 'password123');
    app.rentScooter(scooter, user);
    expect(() => app.rentScooter(scooter, user)).toThrow('Scooter already rented');
  });

  // Dock Scooter
  test('should dock a scooter at a station', () => {
    app.loginUser('testUser', 'password123');
    app.rentScooter(scooter, user);
    app.dockScooter(scooter, 'Station2');
    expect(scooter.station).toBe('Station2');
    expect(scooter.user).toBeNull();
    expect(app.stations['Station2']).toContain(scooter);
  });

  test('should throw error if station does not exist', () => {
    expect(() => app.dockScooter(scooter, 'NonExistentStation')).toThrow('No such station');
  });

});