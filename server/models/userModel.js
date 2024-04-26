import { Schema, model } from 'mongoose';

// Create Schema

const userSchema = new Schema(
    {
        username: {
        type: String,
        required: true,
        unique: true,
        },
        email: {
        type: String,
        required: true,
        unique: true,
        },
        password: {
        type: String,
        required: true,
        },
    },
    {
        timestamps: true,
    }
    );

// Create Model

const UserModel = model('users', userSchema);

export default UserModel;