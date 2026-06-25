import mongoose from "mongoose";

const paymentsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  customerId: {
    type: String,
    required: true
  },
  plan: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

const Payments = mongoose.model('Payments', paymentsSchema);