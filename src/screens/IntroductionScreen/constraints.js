import moment from 'moment'

const constraints = {
  name: {
    format: {
      pattern: "^[A-Za-z'-_.]+ [A-Za-z'-_.]+( [A-Za-z'-_.]+)?",
      message:
        '^Please provide both your first name and last name. They cannot include special characters.',
    },
  },
  birthday: {
    datetime: {
      dateOnly: false,
      latest: moment.utc().subtract(13, 'years'),
      message: '^You need to be at least 13 years old',
    },
  },
}

export default constraints
