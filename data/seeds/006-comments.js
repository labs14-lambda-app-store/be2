/* For testing on a local sqlite environment DO NOT run seeds. */
exports.seed = function(knex, Promise) {
  return knex("comments")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("comments").insert([
        {
          comment: "This is a great start but it needs more work.",
          app_id: 1
        },
        {
          comment:
            "Let's totally and for seriously refactor all of it to be mobile first, React Native, and written in Python",
          app_id: 1
        },
        {
          comment: "I've never seen a more useful app.  Let's get this funded.",
          app_id: 2
        }
      ]);
    });
};
