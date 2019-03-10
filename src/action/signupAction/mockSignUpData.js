const mockSignUpData = {
  // errorResponse: {
  //   message: 'Username already exists. Enter another username'
  // },

  error: {
    response: {
      data: {
        message: 'Username already exists. Enter another username'
      }
    }
  },
  successResponse: {
    status: 'success',
    data: {},
    message: 'Inserted a new user',
    token: ''
  },
  signupData: {
    username: 'sammie',
    email: 'sammie@gmail.com',
    phone: '08035627654',
    address: '17 Chapel Street, Sabo',
    password: 'sammie'
  }
};

export default mockSignUpData;
