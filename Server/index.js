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

async function run() {
  try {
    await client.connect();
    console.log("Database Connect Successful");
  } catch (error) {
    console.log(error.message);
  }
}
run();

app.get("/", async(req, res) => {
  res.send("Done");
});

// Create Jwt Token
app.post("/createJwtToken", (req, res) => {
  try{
	  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
	expiresIn: "30d",
  });
  res.send({
	data: token,
	success: true,
	message: "JWT Token Generate Successful",
  });
  }catch(error){
	res.send({
		data: error.message,
		success: false,
		message: "JWT Token Generate Successful",
	});
  }
});

// Save User Info & Generate JWT Token
app.put("/users/:email", async (req, res) => {
	try{
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
	}catch(error){
		 res.send({
    data: error.message,
    success: false,
    message: "Account Created Fail! Please try again",
  });
	}
});

// Get All User Data
app.get("/users", async (req, res) => {
  try {
    const query = {};
    const result = await Users.find({}).toArray();
    res.send({
      data: result,
      success: true,
      message: "Successfully find the all data",
    });
  } catch (error) {
    res.send({
      data: error.message,
      success: false,
      message: "Data Load Fail!",
    });
  }
});

// Create Students
app.post("/students", async (req, res) => {
  try{
	  const student = req.body;
	  const result = await Students.insertOne(student)
	  console.log(result)
	  res.send({
		data: result,
		success: true,
		message: "Created New Student Data Successful",
	  });
  }catch(error){
	res.send({
		data: error.message,
		success: false,
		message: "Created Student Data Fail",
	});
  }
});

// Get All Products Data
app.get("/students", async (req, res) => {
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


app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running SuccessFull Port", process.env.PORT);
});

