const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['localhost'],
                                        keyspace: 'cycling' });
 
const query = 'SELECT lastname FROM cyclists';

client.eachRow(query, 
               [], 
               function(n, row) {
                    console.log('Found cyclist : ' + row.lastname);                  
               },
               function(err, result) {
                    client.shutdown();
               }
);