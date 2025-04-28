import express from "express";
import validateBody from "../helpers/validateBody.js";
import { registerSchema, loginSchema } from "../schemas/authSchemas.js";
import { updateSubscriptionSchema } from "../schemas/userSchemas.js";
import {
  register,
  login,
  getCurrent,
  logout,
} from "../controllers/authControllers.js";
import { updateSubscription } from "../controllers/userControllers.js";
import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), register);

authRouter.post("/login", validateBody(loginSchema), login);

authRouter.get("/current", authenticate, getCurrent);

authRouter.patch(
  "/subscription",
  authenticate,
  validateBody(updateSubscriptionSchema),
  updateSubscription
);

authRouter.post("/logout", authenticate, logout);

export default authRouter;
