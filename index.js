import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
// import multer from 'multer';

// Import routers
import connectDB from "./db/db.js"
import notesRouter from './routes/notes.js';
import usersRouter from './routes/users.js';
import forgotRouter from './routes/forgot.js';
import signupRouter from './routes/signup.js';
import loginRouter from './routes/login.js';
import logoutRouter from './routes/logout.js';
// import verifyTokenRouter from './routes/verify-token.js';
import verifyTokenRouters from './routes/verify-tokens.js';
import revenueUpdatesRouter from './routes/revenue-updates.js';
import dummyRouter from './routes/dummy.js';


// Convert __dirname to ES Module equivalent
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// const Multer = multer();

// View engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
 app.use(express.static(path.join(__dirname, 'public')));

const allowedOrigins = [
  'https://api-ch-48-material-ui.vercel.app',
  'http://localhost:8000',
  'https://material-ui-one-ashen.vercel.app'
];

// Function to check if the origin is allowed
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

 app.use(cors(corsOptions));
//app.use(cors());
app.use('/notes', notesRouter);
app.use('/dummy', dummyRouter);
app.use('/users', usersRouter);
app.use('/signup',  signupRouter);
app.use('/login',  loginRouter);
app.use('/forgot-password', forgotRouter);
app.use('/logout', logoutRouter);
 app.use('/verify-token', verifyTokenRouters);
app.use('/revenue-updates', revenueUpdatesRouter);

// Home route
app.get('/', (req, res) => {
  res.status(200).send({ message: 'welcome mui dashboard' });
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Port
const PORT = process.env.PORT || 8080;

// Connect to the database before listening
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Server Running im port ${PORT}`.bgCyan.white
      );
    });
  })
  .catch((err) => {
    console.error(`Database connection error: ${err}`.bgRed.white);
  });


