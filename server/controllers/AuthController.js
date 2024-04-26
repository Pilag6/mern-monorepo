import UserModel from "../models/userModel.js";
import asyncHandler from "../config/asyncHandler.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const register = asyncHandler(async (req, res) => {
    // Destructure the request body
    const { username, email, password } = req.body;

    // Hash de password before saving in database
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const user = await UserModel.create({
        username,
        email,
        password: hashedPassword
    });

    // If the user is created successfully
    if (user) {
        res.status(201).json({
            message: "User created successfully"
        });
    } else {
        // If the user is not created successfully
        res.status(400);
        throw new Error("Invalid user data");
    }
});

const login = asyncHandler(async (req, res) => {
    // Destructure the request body
    const { email, password } = req.body;

    // Find the user by email
    const user = await UserModel.findOne({ email });

    // Check if the user is found
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);

    // If the user is found
    if (isMatch) {
        // Create a token
        const accessToken = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET, 
            {expiresIn: "1h"}
        );

        // Create a cookie and set the token
        res.cookie("token", accessToken, {
            httpOnly: true,
            secure: true
        });

        // Send the token to the client
        res.status(200).json({
            message: "User logged in successfully"
        });
    } else {
        // If the user is not found
        res.status(401);
        throw new Error("Invalid email or password");
    }
});

export { register, login };
