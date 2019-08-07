exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("comments")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("comments").insert([
        {
          id: 1,
          comment: "This is a great start but it needs more work.",
          project_id: 1
        },
        {
          id: 2,
          comment:
            "Let's totally and for seriously refactor all of it to be mobile first, React Native, and written in Python",
          project_id: 1
        },
        {
          id: 3,
          comment: "I've never seen a more useful app.  Let's get this funded.",
          project_id: 2
        }
      ]);
    });
};
