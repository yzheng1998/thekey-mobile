const constraints = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: '^Please provide your first name',
    },
  },
  lastName: {
    presence: {
      allowEmpty: false,
      message: '^Please provide your last name',
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a valid email',
    },
    email: {
      message: '^Please provide a valid email',
    },
  },
  password: {
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
  },
}

export default constraints
