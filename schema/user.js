import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    fullname: String,
    email: {
      type: String,
      required: [true,"email field is required"]
    },
    password: String,
    mobile: Number,
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
});

userSchema.pre("save",async function(next){
  const user = await mongoose.model('User').findOne({
    email: this.email
  });
  if(user)
  {
    next("Username already exist");
  }
  else {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  }
});

export default mongoose.model('User', userSchema);
