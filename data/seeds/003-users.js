exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "lambda.app.store",
          email: "lambda.app.store@gmail.com",
          role: "admin",
          sub_id: "google-oauth2|111329742811325396789",
          first_name: "Lambda",
          last_name: "AppStore",
          pictureURL:
            "https://lh5.googleusercontent.com/-QsiiVDXM4co/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcrXpr93nmVy2bDhY2D3E61BrvOWQ/photo.jpg"
        }
      ]);
    });
};
