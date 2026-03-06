import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    roll: {
      type: Number,
      required: true,
      unique: true,
      min: 1,
      validate: {
        validator: Number.isInteger,
        message: "Roll must be a positive integer",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);