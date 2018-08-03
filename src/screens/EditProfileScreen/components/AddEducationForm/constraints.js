const constraints = {
  schoolName: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a school name',
    },
  },
  schoolType: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a school type',
    },
  },
  degreeType: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a degree type',
    },
  },
  major: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a field of study',
    },
  },
  startYear: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a valid year',
    },
    length: {
      is: 4,
      message: '^Please provide a valid year',
    },
    format: {
      pattern: /^[0-9]*$/,
      message: '^Please provide a valid year',
    },
  },
  endYear: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a valid year',
    },
    length: {
      is: 4,
      message: '^Please provide a valid year',
    },
    format: {
      pattern: /^[0-9]*$/,
      message: '^Please provide a valid year',
    },
  },
}

export default constraints
