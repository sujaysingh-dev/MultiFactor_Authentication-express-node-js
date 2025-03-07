import express, { json, urlencoded } from "express";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/dbConnect.js";
import './config/passportConfig.js'

import authRoutes from './routes/authRoutes.js'

dotenv.config();
dbConnect();
const port = process.env.PORT || 8002;
const app = express();

// Middleware
const corsOptions = {
  origin: ["http:localhost:3001"],
  credential: true,
};

app.use(cors(corsOptions));
app.use(json({ limit: "100mb" }));
app.use(urlencoded({ limit: "100mb", extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "SECRET",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes)



// Server listen
app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
