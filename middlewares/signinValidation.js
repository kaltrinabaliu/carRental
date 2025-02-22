import { db } from "../database/connection.js";
import bcrypt from "bcrypt";

const signinValidation = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const user = await db.collection("customers").findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Username or password is incorrect" });
        }

        if (!user.password) {
            return res.status(500).json({ message: "User record is invalid" });
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Username or password is incorrect" });
        }

        req.body.user = user;
        next();
    } catch (error) {
        console.error("Signin error:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default signinValidation;
