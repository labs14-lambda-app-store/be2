/* For testing on a local sqlite environment DO NOT run seeds. */
exports.seed = function(knex, Promise) {
  return (
    knex
      /* This .raw function allows for truncation while being referenced in a foreign key */
      .raw("TRUNCATE TABLE tags RESTART IDENTITY CASCADE")
      .then(function() {
        // Inserts seed entries
        return knex("tags").insert([
          { tag_name: "JavaScript" }, //1
          { tag_name: "CSS" }, //2
          { tag_name: "React" }, //3
          { tag_name: "Node" }, //4
          { tag_name: "Java" }, //5
          { tag_name: "Python" }, //6
          { tag_name: "React Native" }, //7
          { tag_name: "C#" }, //8
          { tag_name: "C++" }, //9
          { tag_name: "Android" }, //10
          { tag_name: "iOS" }, //11
          { tag_name: "Ruby" }, //12
          { tag_name: "Postgres" }, //13
          { tag_name: "MongoDB" }, //14
          { tag_name: "TypeScript" }, //15
          { tag_name: "Material-UI" }, //16
          { tag_name: "Reactstrap" }, //17
          { tag_name: "Bootstrap" } //18
        ]);
      })
  );
};
