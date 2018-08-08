const constraints = {
  newPassword: {
    length: {
      minimum: 6,
      message: '^Please provide at least 6 characters',
    },
  },
  confirmNewPassword: {
    equality: {
      attribute: 'newPassword',
      message: '^Passwords do not match!',
    },
  },
}

export default constraints
