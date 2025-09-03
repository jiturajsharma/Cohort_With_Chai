    import bcrypt from 'bcryptjs'
    import jwt from 'jsonwebtoken'
    import crypto from "crypto";
    import nodemailer from "nodemailer";
    import User from "../models/User.model.js"


    const registerUser = async (req, res) => {
    //register user
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
        message: "All fields are required",
        });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
        return res.status(400).json({
            message: "User already exists",
        });
        }
        const user = await User.create({
        name,
        email,
        password,
        });

        if (!user) {
        return res.status(400).json({
            message: "User not registered",
        });
        }

        //verification token, not jwt token
        const token = crypto.randomBytes(32).toString("hex");
        user.verificationToken = token;
        await user.save();

        //send verification email

        const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        auth: {
            user: process.env.MAILTRAP_USERNAME,
            pass: process.env.MAILTRAP_PASSWORD,
        },
        });
        const mailOptions = {
        from: process.env.MAILTRAP_SENDER_EMAIL,
        to: user.email,
        subject: "Verify your email",
        text: `Please click on the following link to verify your email: ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
        };
        await transporter.sendMail(mailOptions);

        res.status(200).json({
        message: "User registered, check your email to verify",
        success: true,
        });
    } catch (error) {
        res.status(400).json({
        message: "User not registered",
        error,
        success: false,
        });
    }
    };





export {
    registerUser
}
