const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Admin name can't be empty"],
    },
    email: {
      type: String,
      required: [true, "Admin email can't be empty"],
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "manager", "user"],
    },
    image: String,
    password: {
      type: String,
      required: [true, "Admin must have a password"],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: "Passwords are not the same!",
      },
    },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

adminSchema.methods.isPasswordCorrect = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

adminSchema.pre(/^find/, function (next) {
  this.select("-__v -updatedAt");
  next();
});

const adminModel = mongoose.model("Admin", adminSchema);
module.exports = adminModel;
