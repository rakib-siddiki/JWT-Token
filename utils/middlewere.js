//this is middleWere file
const jwt = require("jsonwebtoken")
const userlist = require('../model/userSchema')
async function TestMiddleWere(req, res, next) {
  try {
   const token = req.headers.authorization
   !token && res.status(401).json({ message: "unauthorized user" });
  const decoded = jwt.verify(token,"email")
  const user = await userlist.findOne({email:decoded.email})
  user ? next() : res.status(401).json("unauthorized user");
 } catch (error) {
  console.error(error.message);
  res.status(401).json({message:"unauthorized user"})
 }

}
module.exports = TestMiddleWere;
