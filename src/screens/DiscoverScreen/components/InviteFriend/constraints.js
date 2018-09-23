const constraints = {
  email: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a valid email',
    },
    email: {
      message: '^Please provide a valid email',
    },
  },
}

export default constraints
