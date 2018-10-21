const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/

const constraints = {
  password: {
    presence: true,
    format: {
      pattern,
      message: 'must contain a capital, lowercase, and number',
    },
    length: {
      minimum: 6,
      message: '^\nPassword must be at least 6 characters long',
    },
  },
}

export default constraints
