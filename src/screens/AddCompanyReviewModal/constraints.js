const constraints = {
  reviewTitle: {
    presence: {
      allowEmpty: false,
      message: '^Please provide a review title',
    },
  },
  reviewPros: {
    length: {
      minimum: 10,
      tooShort: '^Please provide at least 10 words',
      tokenizer: value => value.split(' '),
    },
  },
  reviewCons: {
    length: {
      minimum: 10,
      tooShort: '^Please provide at least 10 words',
      tokenizer: value => value.split(' '),
    },
  },
}

export default constraints
