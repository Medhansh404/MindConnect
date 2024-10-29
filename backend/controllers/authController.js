const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const handleLogin = async (req, res) => {
    const { email, pwd } = req.body;
    if (!email || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      })
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    
    if (match) {
        const roles = Object.values(foundUser.role)
        const user_id = foundUser.id
        const userName = foundUser.name;
        const gender = foundUser.gender;
        const dob = foundUser.dob;
        const mobile = foundUser.mobile;
        // create JWTs
        const accessToken = jwt.sign(
          {
            "UserInfo": {
              "email":foundUser.email,
              "roles": roles
          }},
          process.env.ACCESS_TOKEN_SECRET,
          {expiresIn: '600s'}
        );
        const refreshToken = jwt.sign(
          {"email": foundUser.email},
          process.env.REFRESH_TOKEN_SECRET,
          {expiresIn: '1d'}
        );
      // save refresh with the current user 
        res.cookie('jwt', refreshToken, {httpOnly:true, sameSite: 'None', secure: true, maxAge: 24*60*60*1000});
        res.json({ userName, accessToken , roles, user_id, gender, dob, mobile, email});
    } else {
        res.sendStatus(401);
    }
}

const handleLogout = async (req, res) => {
  
  // Check if the jwt cookie is present
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content to send back if there's no cookie

  // Clear the jwt cookie
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
  res.json({ message: 'Logged out successfully' });
};

module.exports = { handleLogin, handleLogout };