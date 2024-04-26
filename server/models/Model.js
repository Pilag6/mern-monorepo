import { Schema, model } from "mongoose";

// Create Schema

const modelSchema = new Schema(
    {
        string: {
            type: String,
            required: true
        },
        number: {
            type: Number,
        },
        boolean: {
            type: Boolean,
        },
        date: {
            type: Date,
            default: Date.now
        },
        arrays: {
            type: [String],
        }
    },
    {
        timestamps: true
    }
);

// Create Model

const Model = model("models", modelSchema);

export default Model;
