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
      message: 'must be in this format: MMM YYYY',
    },
    datetime: {
      message: 'must be in this format: MMM YYYY',
    },
  },
  endDate: {
    datetime: {
      message: 'must be in this format: MMM YYYY',
    },
  },
}

export default constraints
