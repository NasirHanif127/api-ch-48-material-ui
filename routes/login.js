import  express from'express';
const router = express.Router();
import User from"../schema/user.js";
import {create} from"../services/token.js";
import bcrypt from'bcrypt';

router.post('/', async function(request, response) {
  let user = request.body;
  let info = await User.findOne({email : user.username});
  if(info)
  {
    const isRight = await bcrypt.compare(user.password, info.password);
    if(isRight)
    {
      response.status(200);
      response.json({
        message: "success",
        token: create({
          name: info.fullname,
          email: info.email,
          mobile: info.mobile,
          userId: info._id
        })
      })
    }
    else {
      response.status(401);
      response.json({
        message: "incorrect password"
      })
    }
  }
  else {
    response.status(404);
    response.json({
      message: "user not found"
    })
  }
});

export default router;
