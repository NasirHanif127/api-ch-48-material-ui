import mongoose from "mongoose"
const { Schema } = mongoose;

const noteSchema = new Schema({
  userId: String,
  filename: {
   type: String,
   default: "noname"
  },
  content: {},
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Note', noteSchema);
