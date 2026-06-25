import mongoose from "mongoose";

const paymentsSchema = new mongoose.Schema({
  userId,
  customerId,
  plan,
  status
})

const Payments = mongoose.model('Payments', paymentsSchema);