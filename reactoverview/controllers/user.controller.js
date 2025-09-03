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

    const verifyUser = async (req, res) => {
    //verify user
    const { token } = req.params;
    console.log(token);
    if (!token) {
        return res.status(400).json({
        message: "Invalid token",
        });
    }
    try {
        const user = await User.findOne({ verificationToken: token });
        if (!user) {
        return res.status(400).json({
            message: "Invalid token",
        });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save();
        console.log("User verified");
        res.status(200).json({
        message: "User verified",
        });
    } catch (error) {
        res.status(400).json({
        message: "User not verified",
        error,
        });
    }
    };

    const loginUser = async (req, res) => {
  //login user with email and password then add secure token in cookie

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    console.log("=== Login Controller Debug ===");
    console.log("Token generated:", token);

    // Set cookie with minimal options for testing
    const cookieOptions = {
      httpOnly: false, // Set to false for testing
      secure: false, // Set to false for local development
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    };

    console.log("Cookie options:", cookieOptions);

    // Set cookie before sending response
    res.cookie("token", token, cookieOptions);

    // Log headers to verify cookie is set
    console.log("Response headers:", res.getHeaders());

    // Send response
    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {}
};







export {
    registerUser,
    loginUser
}
