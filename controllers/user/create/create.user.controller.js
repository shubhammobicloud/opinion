const User = require("../../../models/user.model");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
  let data = req.body;

  try {
    if (!data.email || !data.password) {
      return res
        .status(400)
        .json({ status: "error", message: "Enter All Fields" });
    } else {
      let user = await User.findOne({ email: data.email });
      if (user) {
        return res
          .status(400)
          .json({ status: "error", message: "user already exist" });
      }
      bcrypt.hash(data.password, 11).then(async (p) => {
        data.password = p.toString();
        const user = new User(data);
        await user.save();
        res
          .status(200)
          .json({ status: "success", message: "user register successfully" });
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = createUser;
