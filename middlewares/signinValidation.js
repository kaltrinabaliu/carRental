import { db } from "../database/connection.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const signinValidation = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Find user in database
        const user = await db.collection('customers').findOne({ username });

        if (!user) {
            return res.status(401).json({ message: "Username or password is incorrect" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Username or password is incorrect" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send token in response
        res.status(200).json({ token, message: "Login successful" });
    } catch (error) {
        console.error("Signin validation error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default signinValidation;
