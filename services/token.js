
import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.JWT_SECRET || '58480454';

const create = (data)=>{
  return jwt.sign({data: data}, SECRET_KEY);
}

const verify = (token)=>{
 
  try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return {
        verified: true,
        data: decoded
      }
  } catch(err) {
    return {
      verified: false
    }
  }
}

export {
  create,
  verify
}
