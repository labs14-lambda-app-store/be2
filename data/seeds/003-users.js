exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "JeffLapp",
          email: "jefflapp@email.com",
          role: "admin",
          sub_id: "fnesiudytf87344htewiurht",
          first_name: "Jeff",
          last_name: "Lapp",
          pictureURL: "example url"
        },
        {
          username: "DavidClavijo",
          email: "davidclavijo@email.com",
          role: "student",
          sub_id: "dsfjw93ej48rth8wi5h7t",
          first_name: "David",
          last_name: "Clavijo",
          pictureURL: "example url"
        },
        {
          username: "KaylaCrow",
          email: "kaylacrow@email.com",
          role: "student",
          sub_id: "fweiss74t8yre5087y6587e6y785gh87",
          first_name: "Kayla",
          last_name: "Crow",
          pictureURL: "example url"
        },
        {
          username: "JoshDisney",
          email: "joshdisney@email.com",
          role: "student",
          sub_id: "djhf38we745ty8e7hg6rs7dy",
          first_name: "Josh",
          last_name: "Disney",
          pictureURL: "example url"
        },
        {
          username: "VictorNguyen",
          email: "victornguyen@email.com",
          role: "student",
          sub_id: "jfow4j8rifpreuhs5pi8w3he9t48",
          first_name: "Victor",
          last_name: "Nguyen",
          pictureURL: "example url"
        },
        {
          username: "ChrisPetito",
          email: "chrispetito@email.com",
          role: "student",
          sub_id: "sdlkfj3oei4iruhtiwuef4hf31iqhw48",
          first_name: "Chris",
          last_name: "Petito",
          pictureURL: "example url"
        },
        {
          username: "JamesStarks",
          email: "jamesstarks@email.com",
          role: "student",
          sub_id: "h3we879s47r5tu8r7y5587gh",
          first_name: "James",
          last_name: "Starks",
          pictureURL: "example url"
        },
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
