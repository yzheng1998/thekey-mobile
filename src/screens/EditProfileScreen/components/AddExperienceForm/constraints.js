const constraints = {
  employer: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a company name',
    },
  },
  position: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a position',
    },
  },
  startDate: {
    presence: {
      allowEmpty: false,
    },
  },
}

export default constraints
