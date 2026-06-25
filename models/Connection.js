import mongoose from "mongoose";

const connectionsSchema = new mongoose.Schema({
  userId,
  platform: "youtube",
  accessToken,
  refreshToken,
  expiresAt
})

const Connections = mongoose.model('Connections', connectionsSchema);