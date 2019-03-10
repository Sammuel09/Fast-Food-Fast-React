import { extractErrorMessages, validateSignUpInput } from './signup';

const emptyInput = {
  username: '',
  email: '',
  phone: '',
  address: '',
  password: ''
};

const shortInput = {
  username: 'Y',
  email: 'jjjhhhk.com',
  address: '16, Agoro',
  password: 'u'
};

const invalidInput = {
  username: 'kent&&',
  email: 'jjjhhhk',
  phone: '-3',
  address: '',
  password: 'as'
};

describe('Sign Up Validation Test', () => {
  it('should give error for empty string input', () => {
    expect(validateSignUpInput(emptyInput).length).toEqual(5);
  });

  it('should give error for short string input', () => {
    expect(validateSignUpInput(shortInput).length).toEqual(3);
  });

  it('should give error for invalid string input', () => {
    expect(validateSignUpInput(invalidInput).length).toEqual(3);
  });
});

describe('extractErrorMessages function Test', () => {
  it('should successfully extract error messages', () => {
    expect(
      extractErrorMessages(validateSignUpInput(emptyInput)).length
    ).toEqual(138);
  });

  it('should return nothing if array is empty', () => {
    expect(extractErrorMessages([]).length).toEqual(0);
  });
});
