const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'mydb';

// find posts
const findPosts = function(db, callback) {
    
  // Get the posts collection
  const postsCollection = db.collection('posts');
    
  // Find some posts
  postsCollection.find({}).toArray(function(err, posts) {

    console.log("Found " + posts.length + " posts");
      
    console.log(posts);
      
    callback();
  });
};

// Use connect method to connect to the server
MongoClient.connect(
    url, 
    function(err, client) {
  
        console.log("Connected successfully to server");

        const db = client.db(dbName);

        findPosts(
            db, 
            function() {
                client.close();
            });
    });