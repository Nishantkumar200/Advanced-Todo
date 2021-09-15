import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type:String},
    todos: [
      {
        title: { type: String },
        detail: { type: String },
        dueDate: {
          type: Date,
        },

        createdAt: {
          type: Date,
          default: Date.now,
        },
        isCompleted: { type: Boolean, default: false },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model("User", userSchema);
