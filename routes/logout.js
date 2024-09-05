import  express from'express';
const router = express.Router();
import mongoose  from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/react');
import User  from "../schema/user.js";

router.get('/:id', async function(request, response) {
  let id = request.params.id;
  try {
    const data = await User.findById(id);
    if(data)
    {
      // Note : In production must update the logout status false in user collection
      response.status(200);
      response.json({
        success: true
      });
    }
    else {
      response.status(409);
      response.json({
        success: false
      });
    }
  }
  catch(err)
  {
    response.status(409);
    response.json({
      success: false
    });
  }
});

export default router;
