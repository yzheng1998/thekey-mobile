const constraints = {
  name: {
    format: {
      pattern: "^[A-Za-z'-_.]+ [A-Za-z'-_.]+( [A-Za-z'-_.]+)?",
      message:
        '^Please provide both your first name and last name. They cannot include special characters.',
    },
  },
}

export default constraints
