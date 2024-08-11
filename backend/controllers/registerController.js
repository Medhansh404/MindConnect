const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { name, user, pwd } = req.body;
    if (!name || !user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    
    try {
        // encrypt the password
        const { name, user, pwd } = req.body;
        const hashedPwd = await bcrypt.hash(pwd, 10);

        // store the new user
        const newUser = await prisma.user.create({
            data: {
                name:name,
                email: user,
                password: hashedPwd,
                role: [1910],
                

            }
        });

        res.status(201).json({ 'success': `New user ${name} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };
