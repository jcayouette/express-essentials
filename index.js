import express, { json, response } from "express";
import data from "./data/mock.json" assert { type: "json" };
import gear from "./data/gear.json" assert { type: "json" };
import favicon from "serve-favicon";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient, ObjectId } from "mongodb";
import BodyParser from "body-parser";

// Instantiate the Express APP
const app = express();

// MongoDB Connection
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let collection;

// Body parser for working with json
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true }));

// React runs on 3000 use 3001
const PORT = 3001;

app.get("/class/:id", (req, res) => {
  const studentId = Number(req.params.id);
  const student = data.filter((student) => student.id === studentId);
  res.send(student);
});

// const gearArray = [];
// for (let i = 0; i < data.length; i++) {
//   if (data[i].id === 4) {
//     gearArray.push(data[i].first_name);
//     //console.log(data[i].first_name);
//     //console.log(data[i].last_name);
//     //console.log(data[i].email);
//   }
// };
// console.log(gearArray[0]);

// The gear array and profile
var gearArray = { gearProfile: [] };

// The gear map function
gear.map(function (item) {
  gearArray.gearProfile.push({
    camera: item.camera,
    filterWheel: item.filter,
    focuser: item.focuser,
    rotator: item.rotator,
    telescope: item.telescope,
    guider: item.guider,
    switch: item.switch,
    flatPanel: item.flatPanel,
    weather: item.weather,
    dome: item.dome,
    safetyMonitor: item.safetyMonitor
  });
});

for (let i = 0; i < gear.length; i++) {
  if (gear[i].id === 0) {
    gearArray.push(gear[i].telescope);
    console.log(gear[i].camera);
    console.log(gear[i].filterWheel);
  }
}

console.log(gear);


// Using the public folder at the root of the project
app.use(express.static("public"));

// Using the images folder at the route /images
app.use("/images", express.static("images"));

// GET
app.get("/", (req, res) => {
  res.json(data);
});

// POST
app.post("/create", (req, res) => {
  res.send("This is a POST request at /create");
});

// PUT
app.put("/edit", (req, res) => {
  res.send("This is a PUT request at /edit");
});

// DELETE
app.delete("/delete", (req, res) => {
  res.send("This is a DELETE request at /delete");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

// Favicon Galaxy Logo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

