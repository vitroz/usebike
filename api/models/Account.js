module.exports = {
  attributes: {
    address: {
      type: 'string'
    },
    addressPostalCode: {
      type: 'string'
    },
    cpf: {
      type: 'string'
    },
    creditCard: {
      type: 'string'
    },
    creditCardValidated: {
      type: 'boolean',
      defaultsTo: false
    },
    user: {
      model: 'user',
      required: true,
      unique: true
    },

    transactions: {
      collection: 'transaction',
      via: 'account'
    }
  }
}