exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "JeffLapp",
          email: "jefflapp@email.com",
          password: "password",
          sub_id: 1,
          first_name: "Jeff",
          last_name: "Lapp",
          pictureURL: "example url"
        },
        {
          username: "DavidClavijo",
          email: "davidclavijo@email.com",
          password: "password",
          sub_id: 2,
          first_name: "David",
          last_name: "Clavijo",
          pictureURL: "example url"
        },
        {
          username: "KaylaCrow",
          email: "kaylacrow@email.com",
          password: "password",
          sub_id: 3,
          first_name: "Kayla",
          last_name: "Crow",
          pictureURL: "example url"
        },
        {
          username: "JoshDisney",
          email: "joshdisney@email.com",
          password: "password",
          sub_id: 4,
          first_name: "Josh",
          last_name: "Disney",
          pictureURL: "example url"
        },
        {
          username: "VictorNguyen",
          email: "victornguyen@email.com",
          password: "password",
          sub_id: 5,
          first_name: "Victor",
          last_name: "Nguyen",
          pictureURL: "example url"
        },
        {
          username: "ChrisPetito",
          email: "chrispetito@email.com",
          password: "password",
          sub_id: 6,
          first_name: "Chris",
          last_name: "Petito",
          pictureURL: "example url"
        },
        {
          username: "JamesStarks",
          email: "jamesstarks@email.com",
          password: "password",
          sub_id: 7,
          first_name: "James",
          last_name: "Starks",
          pictureURL: "example url"
        }
      ]);
    });
};
