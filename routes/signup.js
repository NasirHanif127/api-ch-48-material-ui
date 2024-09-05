import  express from 'express';
const router = express.Router();
import User  from "../schema/user.js";
import {create} from "../services/token.js"

router.post('/', async function(request, response) {
  try {
    const newData = new User(request.body);
    const data = await newData.save();

    response.status(200);
    response.json({
      message: "success",
      token: create({
        name: data.fullname,
        email: data.email,
        mobile: data.mobile,
        userId: data._id
      })
    })
  }
  catch(err)
  {
    response.status(424);
    response.json({
      message: "Username already exist !"
    })
  }
});

export default router;
