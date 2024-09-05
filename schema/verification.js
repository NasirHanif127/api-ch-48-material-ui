import mongo from 'mongoose';
const { Schema } = mongo;

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

export default mongo.model('Verification', verificationSchema);
