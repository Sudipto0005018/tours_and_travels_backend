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
  "https://toursandtravelsapp.netlify.app",
  "https://fullstacktoursandtravels.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow non-browser clients
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("CORS not allowed from this origin"), false);
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

//preflight options
app.options("*", cors());

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
