// const UserModel = require("../models/url.model");

// module.exports.createUser = async (request, response) => {
//   const { userName, email, password } = request.body;
//   let newUserObj = { userName, email, password };
//   try {
//     const newUser = new UserModel(newUserObj);
//     await newUser.save();
//     const { _id, email } = newUser;
//     return response.status(201).json({
//       message: "user created successfully",
//       data: newUser,
//     });
//   } catch (error) {
//     return response.status(400).json({
//       message: "Unable to create user.",
//       error,
//     });
//   }
// };

const UrlModel = require("../models/url.model");

module.exports.createUrl = async (request, response) => {
  const { originalUrl, title, shortUrl } = request.body;
  let newUrlObj = { originalUrl, title, shortUrl };
  try {
    const newUrl = new UrlModel(newUrlObj);
    await newUrl.save();
    const { _id, shortUrl } = newUrl;
    return response.status(201).json({
      message: "new short url created successfully",
      data: newUrl,
    });
  } catch (error) {
    return response.status(400).json({
      message: "Unable to create url.",
      error,
    });
  }
};
