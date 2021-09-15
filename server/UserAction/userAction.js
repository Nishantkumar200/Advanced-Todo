import { UserModel } from "../Schema/userSchema.js";


//  Allow login if user is existing & if not then register the user
export const loginUser = async (req, res) => {
  const { email, googleId, name } = req.body;

  try {
    // Check whether user is existing or not
    const loginUser = await UserModel.findOne({ email: email });

    console.log(loginUser, "Login User");

    if (loginUser) {
      // Check Password is matching or not

      // const isPasswordCorrect = await bcrypt.compareSync(
      //   googleId,
      //   loginUser.password
      // );

      if (googleId==loginUser.password) {
        const { name, todos ,_id} = loginUser;
        console.log(name, todos);
        res.status(200).send({name,todos,_id});
      }
    } else {
      // If user is not existing , then

      // const bcryptPassword = await bcrypt.hashSync(googleId, 10);
      const newUser = await new UserModel({
        name: name,
        email: email,
        password: googleId,
      });

      await newUser.save();

      res.status(200).send({ newUser });
    }
  } catch (error) {
    console.log(error);
  }
};
