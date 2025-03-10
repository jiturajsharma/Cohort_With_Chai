import User from '../model/User.model.js';
import crypto from "crypto"
import nodemailer from 'nodemailer'
const registerUser = async (req, res) =>{
   // get data
   // validate
   // check if user already exists
   // create a user in database
   // create verification token
   // save token in database
   // send token as email to user
   // send success status to user

    const {name, email, password} =req.body
    if(!name || !email || !password){
        return res.status(400).json({
            message: "All field are required"
        })
    }
    // console.log(email)
    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            return resizeTo.status(400).json({
                message: "User already exists"
            })
        }

        const user = await User.create({
            name,
            email,
            password
        })
        console.log(user)
        if(!user){
            return res.status(404).json({
                message: "User not registerd"
            })
        }

        // generate token
        const token = crypto.randomBytes(32).toString("hex")
        console.log(token)
        // token saved
        user.verificationToken = token

        await user.save()


        // send email

        const transport = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD
            }
        });

        const mailOption = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: "Veryfy your email",
            text: `Please click on the following link ${process.env.BASE_URL}/api/v1/users/verify/${token}`
        }

        await transport.sendMail(mailOption)

        res.status(200).json({
            message: "User registered Sucessfully",
            success: true
        })

    } catch (error) {
        res.status(400).json({
            message: "User not registered ",
            error,
            success: false
        })
    }
};

const verifyUser = async (req, res) =>{
    // get token from url
    // validate
    // find user based on token
    // if not
    // set isverified field to true
    // remove verification token
    // save
    // return response

    const {token} = req.params;
    console.log(token)
    if(!token){
        return res.status(400).json({
            message: "Invalid token"
        })
    }
    const user = await User.findOne({verificationToken: token})
    if(!user){
        return res.status(400).json({
            message: "Invalid token"
    })
}
user.isVerified = true,
user.verificationToken = undefined
await user.save()

}

export {registerUser, verifyUser };