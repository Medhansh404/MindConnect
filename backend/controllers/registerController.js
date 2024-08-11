const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    
    try {
        // encrypt the password
        const { user, pwd } = req.body;
        const hashedPwd = await bcrypt.hash(pwd, 10);

        // store the new user
        const newUser = await prisma.user.create({
            data: {
                email: user,
                role: [2023],
                password: hashedPwd
            }
        });

        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };
