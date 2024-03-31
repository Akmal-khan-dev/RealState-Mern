import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '../lib/prisma.js'




export const register = async (req, res) => {
    const { username, email, password } = await req.body

    try {

        // hash password
        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashPassword
            }
        })
       res.status(201).json({message:"User Created successfully."})

    } catch (error) {
        res.status(500).json({message:"Failed to create the user"})
    }
}
export const login = async (req, res) => {
   const {username, password} = req.body

   try {
    // check user
    const user = await prisma.user.findUnique({
        where:{username}
    })
    if(!user) return res.status(401).json({message:"Invalid credentials!"});

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid) return res.status(401).json({message:"Invalid credentials"});

    // res.setHeader("Set-Cookie", "test=" + "myvalue").json("success");
    const age = 1000*60*60*24*7
    const token =  jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn: age})
    res.cookie("token", token, {
        httpOnly: true,
        // secure:tue,
        maxAge :age
    }).status(200).json({message: "Login Successful"});

   } catch (error) {
     console.log(error)
     res.status(501).json({message: "failed to login"})
   }
}
export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({message:"Logout Successful"})
}