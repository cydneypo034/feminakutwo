/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const userApi = require('../models/user.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const userRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
//HTTP Requests
// 
///////////////////GET ALL USERS/////////////////////////////
userRouter.get('/', function (req, res) {
  userApi.getAllUsers().then((users) => {
      res.json(users) 
  })
})

/////////////////////GET ONE USER//////////////////////////
userRouter.get('/:userId', function(req,res){
  userApi.getOneUser(req.params.userId).then((foundUser) => {
      res.json(foundUser);
  })
})

/////////////////////ADD USER///////////////////////////////
userRouter.post('/', function (req, res) {
  userApi.addNewUser(req.body).then((newUser) => {
      res.json(newUser)
  })
})

/////////////////EDIT USER/////////////////////////////////
userRouter.put('/:userId', function(req, res) {
  userApi.editUser(req.params.userId, req.body).then((brandnew) => {
  res.json(brandnew)
  })
})

////////////////////DELETE USER/////////////////////////////
userRouter.delete('/:userId', function(req,res){
  userApi.deleteUser(req.params.userId).then((nouser) => {
      res.json(nouser);
  })
})
/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  userRouter
}
