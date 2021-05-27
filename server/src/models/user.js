const mongoose = require("mongoose");
const crypt = require("bcrypt-nodejs");
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String,
});

userSchema.methods.encryptPass = (password) => {
    return crypt.hashSync(password, crypt.genSaltSync(10));
};

userSchema.methods.validatePassword = function(password) {
    return crypt.compareSync(password, this.password);
};

module.exports = mongoose.model("users", userSchema);