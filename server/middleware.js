import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.header["Authorization"];
  console.log(token);

  if (token) {
    next();
  } else {
    res.send("Token is required");
  }
};
