let redis = require("redis");
let client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set(
    "question", 
    "Are you OK ?", 
    function(err, res) {
    
        console.log('Insert ended with result : ' + res);
        
        client.get(
            "question", 
            function(err, reply) {
    
                // reply is null when the key is missing
                console.log('Found : ' + reply);
                
                client.quit();
            });
    });