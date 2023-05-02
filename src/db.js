const MongoClient = require("mongodb").MongoClient;

// Replace the URL with your own MongoDB URL
const url = "mongodb://localhost:27017";

// Replace the database name with your own database name
const dbName = "mydb";

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);

  // Replace the collection name with your own collection name
  const collection = db.collection("mycollection");

  // Insert a document into the collection
  collection.insertOne({ name: "John", age: 30 }, (err, result) => {
    if (err) throw err;
    console.log("Inserted document:", result.ops[0]);
  });

  // Find all documents in the collection
  collection.find().toArray((err, docs) => {
    if (err) throw err;
    console.log("Found documents:", docs);
  });

  // Close the client connection
  client.close();
});
