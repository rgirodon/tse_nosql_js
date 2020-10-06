var neo4j = require('neo4j-driver');

var driver = neo4j.driver("neo4j://localhost", neo4j.auth.basic("neo4j", "RafaelYanice10"));

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

