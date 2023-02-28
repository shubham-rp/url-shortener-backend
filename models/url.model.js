// const { Schema, model } = require("mongoose");

// const UserSchema = new Schema({
//   userName: { type: String, trim: true, required: true },
//   email: { type: String, trim: true, required: true },
//   password: { type: String, trim: true, required: true },
// });

// module.exports = model("users", UserSchema);

const { Schema, model } = require("mongoose");

const UrlSchema = new Schema({
  originalUrl: { type: String, trim: true, required: true },
  title: { type: String, trim: true, required: true },
  shortUrl: { type: String, trim: true, required: true },
});

module.exports = model("urls", UrlSchema);
