import moment from 'moment'

const constraints = {
  schoolName: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a school name',
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
    numericality: {
      onlyInteger: true,
      lessThanOrEqualTo: moment().year(),
      message: '^Start year must be at or before current year',
    },
  },
  endYear: {
    length: {
      is: 4,
      message: '^Please provide a valid year',
    },
    format: {
      pattern: /^[0-9]*$/,
      message: '^Please provide a valid year',
    },
    numericality: (_, attributes) => ({
      onlyInteger: true,
      greaterThanOrEqualTo: parseInt(attributes.startYear, 10),
      message: '^Grad year must be at or after start year',
    }),
  },
}

export default constraints
