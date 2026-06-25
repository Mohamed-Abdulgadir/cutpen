import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: {type: String, required: true },
  description: { type: String, required: true
  },
  mediaUrl: { type: String, required: true
  },
  publishDate: { type: Date, required: true
  },
  status: { type: String, required: true
  }
})

const Schedule = mongoose.model('Schedule', scheduleSchema);