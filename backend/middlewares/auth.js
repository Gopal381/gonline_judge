import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const auth = (req, res, next) => {
  try {
    const token = req.body.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: " Token Missing",
      });
    }

    try {
      const decode = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decode;
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "token is valid",
      });
    }
    next();
  } catch (error) {
    res.satus(401).json({
      success: false,
      message: "something went wrong",
    });
  }
};

const isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      res.status(401).json({
        success: false,
        message: "you have not access to this",
      });
    }
    res.status(401).json({
      success: true,
      message: "Welcome Admin",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "role is not matching",
    });
  }
};

const isVisitor = (req, res, next) => {
  try {
    if (req.user.role !== "visitor") {
      res.status(401).json({
        success: false,
        message: "you have not access to this",
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "role is not matching",
    });
  }
};

export { auth, isAdmin, isVisitor };
