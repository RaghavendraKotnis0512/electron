import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(`Hashed Password: ${hashedPassword}`); // Debug log
        const user = await User.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        console.error('User registration failed:', error);
        res.status(400).json({ message: 'User registration failed', error });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            console.error('User not found with email:', email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.error('Password mismatch for user with email:', email);
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const userForToken = { id: user.id, email: user.email, role: user.role };
        const accessToken = jwt.sign(userForToken,'3832ed33187861326cc999c42371007138452acd3c4b6a2a82712660b8c27b7a2a783c1353ff03a71b983e97d0a2d0205be2754e27544ab355cd3e7d4175db2f');
        res.json({ accessToken });
    } catch (error) {
        console.error('Login failed:', error);
        res.status(500).json({ message: 'Server error', error });
    }
});




export default router;
