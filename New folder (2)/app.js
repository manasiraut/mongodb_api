const express = require("express");
const cors = require("cors");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.use(cors());

app.use(express.json());

app.get("/api", async (req, res) => {
	// mongodb connection
	const client = await MongoClient.connect(
		"mongodb+srv://manasi03:Manasi123@newcluster.d1187.mongodb.net/test",
		{ useUnifiedTopology: true }
	);
	// get database
	const db = client.db("mydb1");

	// get data from collection
	const data = await db.collection("Movies").find().toArray();

	// send response back to client
	res.send(data);
});

app.listen(3000, function () {
	console.log("listening on 3000");
});
