import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  userId,
  title,
  description,
  mediaUrl,
  publishDate,
  status
})

const Schedule = mongoose.model('Schedule', scheduleSchema);