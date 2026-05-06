// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhoneNumber
test('valid phone number with parenthesis', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number with letters', () => {
  expect(isPhoneNumber('123-456-789a')).toBe(false);
});

test('invalid phone number with no dash', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

//isEmail
test('valid email', () => {
  expect(isEmail('wayoade@ucsd.edu')).toBe(true);
});

test('valid email with underscores', () => {
  expect(isEmail('student_name@example.org')).toBe(true);
});

test('invalid email with no @', () => {
  expect(isEmail('wayoadeucsd.edu')).toBe(false);
});

test('invalid email with no .', () => {
  expect(isEmail('wayoade@ucsd')).toBe(false);
});

//isStrongPassword
test('valid password', () => {
  expect(isStrongPassword('Password')).toBe(true);
});
test('valid password with underscore and numbers', () => {

  expect(isStrongPassword('P_a_s_s_1_2_3')).toBe(true);
});
test('invalid password with no letter', () => {
  expect(isStrongPassword('1234567890')).toBe(false);
});
test('invalid password with space', () => {
  expect(isStrongPassword('Pass word')).toBe(false);
});

//isDate
test('valid date with one digit month/day', () => {
  expect(isDate('1/1/2000')).toBe(true);
});
test('valid date with two digit month/day', () => {
  expect(isDate('01/01/2000')).toBe(true);
});
test('invalid date with no /', () => {
  expect(isDate('01-01-2000')).toBe(false);
});
test('invalid date with bad year', () => {
  expect(isDate('1/1/00')).toBe(false);
});

//isHexColor
test('valid hex color with #', () => {
  expect(isHexColor('#FF0a09')).toBe(true);
});
test('valid shorthand hex color with no #', () => {
  expect(isHexColor('000')).toBe(true);
});
test('invalid hex color special characters', () => {
  expect(isHexColor('#000000!')).toBe(false);
});
test('invalid hex color too long', () => {
  expect(isHexColor('#0000000')).toBe(false);
});