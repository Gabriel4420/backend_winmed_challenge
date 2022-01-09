const mongoose = require('mongoose')

const Clinic = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

module.exports = mongoose.model('clinic', Clinic)
