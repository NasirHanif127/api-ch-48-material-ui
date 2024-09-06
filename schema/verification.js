import mongoose from 'mongoose';
const { Schema } = mongoose;

const verificationSchema = new Schema({
  email: String,
  code: Number,
  isVerified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Verification', verificationSchema);
