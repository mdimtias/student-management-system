const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const uri = process.env.URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// Collection
const Users = client.db("secondHandLaptop").collection("users");
const Students = client.db("secondHandLaptop").collection("students");
const Teachers = client.db("secondHandLaptop").collection("teachers");
const Parents = client.db("secondHandLaptop").collection("parents");
const Books = client.db("secondHandLaptop").collection("books");
const Classes = client.db("secondHandLaptop").collection("classes");

async function run() {
  try {
    await client.connect();
    console.log("Database Connect Successful");
  } catch (error) {
    console.log(error.message);
  }
}
run();

app.get("/", async (req, res) => {
  res.send("Done");
});

// Create Jwt Token
app.post("/createJwtToken", (req, res) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "30d",
    });
    res.send({
      data: token,
      success: true,
      message: "JWT Token Generate Successful",
    });
  } catch (error) {
    res.send({
      data: error.message,
      success: false,
      message: "JWT Token Generate Successful",
    });
  }
});

// Verify JWT Token
function verifyJwt(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({ message: "unauthorized" });
  }
  const token = authHeader;

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ massage: "unauthorized" });
    }

    req.decoded = decoded;
    next();
  });
}

// Save User Info & Generate JWT Token
app.put("/users/:email", async (req, res) => {
  try {
    const user = req.body;
    const email = req.params.email;
    const filter = { email: email };
    const option = { upsert: true };
    const updateDoc = {
      $set: user,
    };
    const result = await Users.updateOne(filter, updateDoc, option);

    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "30d",
    });
    res.send({
      data: result,
      token: token,
      success: true,
      message: "Successfully Created User",
    });
  } catch (error) {
    res.send({
      data: error.message,
      success: false,
      message: "Account Created Fail! Please try again",
    });
  }
});

// Get All User Data
app.get("/users", verifyJwt, async (req, res) => {
  try {
    const query = {};
    const result = await Users.find({}).toArray();
    res.send({
      data: result,
      success: true,
      message: "Successfully find the all users data",
    });
  } catch (error) {
    res.send({
      data: error.message,
      success: false,
      message: "Data Load Fail!",
    });
  }
});

// Added New Students
app.post("/students", verifyJwt, async (req, res) => {
  try {
    const student = req.body;
    const result = await Students.insertOne(student);
    res.send({
      data: result,
      success: true,
      message: "Created New Student Data Successful",
    });
  } catch (error) {
    res.send({
      data: error.message,
      success: false,
      message: "Created Student Data Fail",
    });
  }
});

// Get All Students Data
app.get("/students", verifyJwt, async (req, res) => {
  try {
    const query = {};
    const result = await Students.find(query).toArray();
    res.send({
      data: result,
      success: true,
      message: "Successfully find the all Students data",
    });
  } catch (error) {
    res.send({
      data: error,
      success: false,
      message: "Data Load Fail",
    });
  }
});

// Added New Teachers
app.post("/teachers", verifyJwt, async (req, res) => {
  try {
    const teacher = req.body;
    const result = await Teachers.insertOne(teacher);
    res.send({
      data: result,
      success: true,
      message: "Added New Teacher Successful",
    });
  } catch (error) {
    res.send({
      data: error.message,
      success: false,
      message: "Fail to Added New Teacher",
    });
  }
});

// Get All Teachers Data
app.get("/teachers", verifyJwt, async (req, res) => {
  try {
    const query = {};
    const result = await Teachers.find(query).toArray();
    res.send({
      data: result,
      success: true,
      message: "Successfully find the all Teachers data",
    });
  } catch (error) {
    res.send({
      data: error,
      success: false,
      message: "Data Load Fail",
    });
  }
});

// Added New Parents
app.post("/parents", verifyJwt, async (req, res) => {
  try {
    const teacher = req.body;
    const result = await Parents.insertOne(teacher);
    res.send({
      data: result,
      success: true,
      message: "Added New Parents Successful",
    });
  } catch (error) {
    res.send({
      data: error.message,
      success: false,
      message: "Fail to Added New Teacher",
    });
  }
});

// Update Parents Date 
app.put("/parents/:id", async (req, res)=>{
  try{
    const parent = req.body;
    const id = req.params.id;
    const filter = {_id: ObjectId(id)};
    const option = {upsert: true};
    const updateDoc = {
      $set: parent
    }
    const result = await Parents.updateOne(filter, updateDoc, option)
    res.send({
      data: result, 
      success: true,
      message: "Update Parent Successfully!"
    })
  }catch(error){
    res.send({
      data: error.message, 
      success: false,
      message: "Fail Update Parent!"
    })
  }
})

// Find Parents Data By Id
app.get("/parents/:id", async (req, res)=>{
  try{
    const id = req.params.id;
    const filter = {_id: ObjectId(id)};
    const result = await Parents.find(filter).toArray();
    res.send({
      data: result, 
      success: true,
      message: "Find Parent Data Successfully!"
    })
  }catch(error){
    res.send({
      data: error.message, 
      success: false,
      message: "Fail to find Parent data!"
    })
  }
})

// Get All Parents Data
app.get("/parents",  async (req, res) => {
  try {
    const query = {};
    const result = await Parents.find(query).toArray();
    res.send({
      data: result,
      success: true,
      message: "Successfully find the all Parents data",
    });
  } catch (error) {
    res.send({
      data: error,
      success: false,
      message: "Data Load Fail",
    });
  }
});

// Added New Classes
app.post("/classes", verifyJwt, async (req, res) => {
  try {
    const classes = req.body;
    const result = await Classes.insertOne(classes);
    res.send({
      data: result,
      success: true,
      message: "Added New Classes Successful",
    });
  } catch (error) {
    res.send({
      data: error.message,
      success: false,
      message: "Fail to Added New Classes",
    });
  }
});

// Get All Books Data
app.get("/classes", async (req, res) => {
  try {
    const query = {};
    const result = await Classes.find(query).toArray();
    res.send({
      data: result,
      success: true,
      message: "Successfully find the all Classes data",
    });
  } catch (error) {
    res.send({
      data: error,
      success: false,
      message: "Data Load Fail",
    });
  }
});



app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running SuccessFull Port", process.env.PORT);
});
