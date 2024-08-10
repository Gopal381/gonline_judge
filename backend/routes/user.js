import express from "express";
import { register, login } from "../controllers/registerController.js";
import { auth, isVisitor, isAdmin } from "../middlewares/auth.js";
import home from "../controllers/home.js";
const router = express.Router();

router.get("/", home);
router.post("/register", register);
router.post("/login", login);

router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the protected route for Tests",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Admin",
  });
});

router.get("/visitor", auth, isVisitor, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Students",
  });
});
// router.post("/logout", logout);

export default router;
