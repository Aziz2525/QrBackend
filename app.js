const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");

const port = process.env.PORT || 9017;
//routers
const generate = require("./router/generate");

app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

app.use(`/${process.env.VERSION}`, generate);

app.listen(port, () => console.log(`${port} dinleniyor...`));
