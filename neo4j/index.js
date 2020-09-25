var neo4j = require('neo4j-driver').v1;

var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "rgirodon"));

var session = driver.session();

session
  .run('MATCH (a:PERSON) RETURN a.firstname AS name')
  .subscribe({
    onNext: function (record) {
      console.log(record.get('name'));
    },
    onCompleted: function () {
      session.close();
      driver.close();
    },
    onError: function (error) {
      console.log(error);
    }
  });

