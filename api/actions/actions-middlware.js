// add middlewares here related to actions
const Action = require('../actions/actions-model.js')
const validateUserId = async ( req, res, next) => {
    try{
        const { id } = req.params
      const user = await Action.get(id);
      if(!user){ res.status(404).json ({message: `No user with ${id}` }) }
      //Assign user object to req.user, call next
      else {
        req.user = user;
        next();
      }
    }
    catch(error) {
      res.status(500).json({message: error.message})
    }
 }
 function validatePost(req, res, next) {
    if(!req.body.text){
      res.status(400).json('Text is required')
    } else {
      next()
    }
  }

  module.exports = {
      validateUserId,
      validatePost
  }