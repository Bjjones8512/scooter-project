const Scooter = require('../src/Scooter');
const ScooterApp = require('../src/ScooterApp');
const User = require('../src/User');

describe('Scooter tests', () => {
  let scooter;
  let user;

  beforeEach(() => {
    scooter = new Scooter('Station1');  // Initialize a new scooter before each test
    user = new User('testUser', 'password123', 21);  // New user for each test
  });

  // Test the Scooter instance creation
  test('should create a scooter instance', () => {
    expect(scooter).toBeInstanceOf(Scooter);
    expect(scooter.station).toBe('Station1');
    expect(scooter.user).toBeNull();
    expect(scooter.charge).toBe(100);
    expect(scooter.isBroken).toBe(false);
  });

  // Test rent method
  test('should rent the scooter to a user if it is charged and not broken', () => {
    scooter.rent(user);
    expect(scooter.user).toBe(user);
    expect(scooter.station).toBeNull();
  });

  test('should throw error if scooter needs charging', () => {
    scooter.charge = 10;
    expect(() => scooter.rent(user)).toThrow('Scooter needs to charge');
  });

  test('should throw error if scooter is broken', () => {
    scooter.isBroken = true;
    expect(() => scooter.rent(user)).toThrow('Scooter needs repair');
  });

  // Test dock method
  test('should dock the scooter at a station and clear the user', () => {
    scooter.rent(user);
    scooter.dock('Station2');
    expect(scooter.station).toBe('Station2');
    expect(scooter.user).toBeNull();
  });
});