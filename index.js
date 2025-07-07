//1.
// const express = require("express");
// const app = express();

// const dotenv = require("dotenv");
// dotenv.config();

// require("./dbConnect");

// const cors = require("cors");
// app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// const PORT = process.env.PORT || 7000;

// const userouter = require("./routers/userRouter");
// app.use("/user", userouter);

// const adminrouter = require("./routers/adminRouter");
// app.use("/admin", adminrouter);

// app.use("/", (req, res) => {
//   res.send("<h1>Hello, this is the backend</h1>");
// });

// app.listen(PORT, () => {
//   console.log(`server is running at ${PORT}`);
// });

//2.
// const express = require("express");
// const app = express();

// const dotenv = require("dotenv");
// dotenv.config();

// require("./dbConnect");

// const cors = require("cors");
// // app.use(cors());

// app.use(
//   cors({
//     origin: "https://toursandtravelsapp.netlify.app",
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// const PORT = process.env.PORT || 7000;

// const userouter = require("./routers/userRouter");
// app.use("/user", userouter);

// const adminrouter = require("./routers/adminRouter");
// app.use("/admin", adminrouter);

// app.use("/", (req, res) => {
//   res.send("<h1>Hello, this is the backend</h1>");
// });

// app.listen(PORT, () => {
//   console.log(`server is running at ${PORT}`);
// });

//3.
const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

require("./dbConnect");

const cors = require("cors");

// app.use(cors());
// app.use(
//   cors({
//     origin: "https://toursandtravelsapp.netlify.app",
//     credentials: true,
//   })
// );

const allowedOrigins = [
  "https://toursandtravelsapp.netlify.app", // main frontend
  "https://fullstacktoursandtravels.netlify.app/", // secondary frontend (if any)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow curl, mobile apps
      if (allowedOrigins.includes(origin)) {
        return callback(null, true); // Allow known origins
      } else {
        return callback(new Error("CORS not allowed from this origin"), false);
      }
    },
    credentials: true,
    optionsSuccessStatus: 200, // For legacy browsers (IE11, etc.)
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 7000;

const userouter = require("./routers/userRouter");
app.use("/user", userouter);

const adminrouter = require("./routers/adminRouter");
app.use("/admin", adminrouter);

app.use("/", (req, res) => {
  res.send("<h1>Hello, this is the backend</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
