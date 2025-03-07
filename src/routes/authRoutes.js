import { Router } from "express";
import passport from "passport";
import {
  register,
  login,
  authStatus,
  logout,
  setup2FA,
  verify2FA,
  reset2FA,
} from "../controllers/authController.js";
const router = Router();

// Registration route
router.post("/register", register);

// Login route
router.post("/login", passport.authenticate("local"), login);

// Auth status route
router.get("/status", authStatus);

// Logout route
router.post("/logout", logout);

// ----------------------------------------------------------------

// 2FA setup route
router.post(
  "/2fa/setup",
  (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.status(404).json({ Message: "Unauthorize" });
  },
  setup2FA
);

// 2FA verify route
router.post(
  "/2fa/verify",
  (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.status(404).json({ Message: "Unauthorize" });
  },
  verify2FA
);

// 2FA reset route
router.post(
  "/2fa/reset",
  (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.status(404).json({ Message: "Unauthorize" });
  },
  reset2FA
);

export default router;
