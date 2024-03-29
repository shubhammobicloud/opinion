const User = require("../../../models/user.model");
const bcrypt = require("bcrypt");
const fs = require("fs");

const createUser = async (req, res, next) => {
  let data = req.body;
  if (!data.email || !data.password) {
    return res
      .status(422)
      .json({ message: "enter all fields" });
  }
  try {
    let user = await User.findOne({ email: data.email });
    if (user) {
      if (req.file?.path) fs.unlinkSync(req.file?.path);
      return res
        .status(409)
        .json({ message: "user already exist" });
    }
    bcrypt.hash(data.password, 11).then(async (p) => {
      data.password = p.toString();
      data.profileImage = req.file?.path;
      const user = new User(data);
      await user.save();
      res
        .status(200)
        .json({ message: "user register successfully" });
    });
  } catch (err) {
    next(err);
  }
};

module.exports = createUser;
