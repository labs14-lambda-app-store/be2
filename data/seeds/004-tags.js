exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex
    .raw(
      "TRUNCATE TABLE tags RESTART IDENTITY CASCADE"
    ) /* This .raw function allows for truncation while being referenced in a foreign key */
    .then(function() {
      // Inserts seed entries
      return knex("tags").insert([
        { tag_name: "JavaScript" },
        { tag_name: "CSS" },
        { tag_name: "React" },
        { tag_name: "Node" },
        { tag_name: "Java" },
        { tag_name: "Python" },
        { tag_name: "React Native" },
        { tag_name: "C#" },
        { tag_name: "C++" },
        { tag_name: "Android" },
        { tag_name: "iOS" },
        { tag_name: "Ruby" },
        { tag_name: "Postgres" },
        { tag_name: "MongoDB" },
        { tag_name: "TypeScript" },
        { tag_name: "Material-UI" },
        { tag_name: "Reactstrap" },
        { tag_name: "Bootstrap" }
      ]);
    });
};
