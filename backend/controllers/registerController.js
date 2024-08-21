const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { name, email, pwd } = req.body;
    if (!name || !email || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    
    try {
        // encrypt the password
        const { name, email, pwd } = req.body;
        const hashedPwd = await bcrypt.hash(pwd, 10);
        console.log(name, email, pwd);

        // store the new user
        const newUser = await prisma.user.create({
            data: {
                name:name,
                email: email,
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
