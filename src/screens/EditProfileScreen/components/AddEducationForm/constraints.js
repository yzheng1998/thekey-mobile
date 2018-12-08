import moment from 'moment'

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
      message: '^Please provide a valid year. ',
    },
    length: {
      is: 4,
      message: '^Please provide a valid year. ',
    },
    format: {
      pattern: /^[0-9]*$/,
      message: '^Please provide a valid year. ',
    },
    numericality: {
      onlyInteger: true,
      lessThanOrEqualTo: moment().year(),
      message: '^Start year must be at or before current year',
    },
  },
  endYear: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a valid year. ',
    },
    length: {
      is: 4,
      message: '^Please provide a valid year. ',
    },
    format: {
      pattern: /^[0-9]*$/,
      message: '^Please provide a valid year. ',
    },
    numericality: (_, attributes) => ({
      onlyInteger: true,
      greaterThanOrEqualTo: parseInt(attributes.startYear, 10),
      message: '^Grad year must be at or after start year',
    }),
  },
  gpa: {
    presence: {
      allowEmpty: false,
      message: '^Please provide your GPA. ',
    },
    numericality: {
      onlyInteger: false,
      lessThanOrEqualTo: 5.0,
      greaterThanOrEqualTo: 0.0,
      message: '^GPA must be a number between 0.0 and 5.0',
    },
  },
}

export default constraints
