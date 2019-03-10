/**
 * @description a function to validate sign up data
 * @param {String} fullname
 * @returns {Object} an objects containing the error messages
 */
const validateSignUpInput = ({ username, email, phone, address, password }) => {
  const errors = {};
  // eslint-disable-next-line max-len
  const emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const fullNamePattern = /[`~/\\±§_+\-=!@#$%^&*(),.?":{}|<>0-9]/g;
  const usernamePattern = /^[a-zA-Z0-9]+$/;
  const addressPattern = /^[a-zA-Z0-9]+$/;

  if (username.trim() === '') {
    errors.userName = 'Username cannot be empty';
  }
  if (username.trim() !== '' && username.length < 2) {
    errors.userName = 'Username is too short';
  }

  if (username.length >= 2 && !username.match(usernamePattern)) {
    errors.userName = 'Username can not contain special characters';
  }

  if (email && email.match(emailPattern) === false) {
    errors.email = 'Please provide a valid email';
  }
  if (!email || email === '') {
    errors.email = 'Email cannot be empty';
  }

  if (!phone || phone === '') {
    errors.phone = 'Phone Number cannot be empty';
  }

  if (Number(phone) !== parseInt(phone, 10)) {
    errors.phone = 'Phone Number has to be a number';
  }

  if (address.trim() === '') {
    errors.fullname = 'Address cannot be empty';
  }
  if (address.trim() !== '' && address.length < 2) {
    errors.fullname = 'Address is too short';
  }

  if (password.trim() === '') {
    errors.password = 'Password cannot be empty';
  }
  const checkPassword = password.trim() !== '' && password.length < 6;
  if (checkPassword) {
    errors.password = 'Password cannot be less than 6 Characters';
  }

  return Object.values(errors);
};

const extractErrorMessages = arrayOfMessages => {
  let text = '';
  arrayOfMessages.forEach(message => {
    text = `\n${text + message};\n`;
  });
  return text;
};

export { validateSignUpInput, extractErrorMessages };
