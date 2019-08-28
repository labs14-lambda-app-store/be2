/* For testing on a local sqlite environment DO NOT run seeds. */
exports.seed = function(knex, Promise) {
  return (
    knex
      /* This .raw function allows for truncation while being referenced in a foreign key */
      .raw("TRUNCATE TABLE users RESTART IDENTITY CASCADE")
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
              "https://lh5.googleusercontent.com/-QsiiVDXM4co/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcrXpr93nmVy2bDhY2D3E61BrvOWQ/photo.jpg",
            github_link: "https://github.com/labs14-lambda-app-store",
            linkedin_link: "https://www.linkedin.com/school/lambdaschool/",
            preferred_pronoun: "They",
            birthday: "1990-01-01"
          },
          {
            username: "joshua.a.disney",
            email: "joshua.a.disney@gmail.com",
            role: "student",
            sub_id: "auth0|5d546a32b379a30ea7d04321",
            first_name: "",
            last_name: "",
            pictureURL:
              "https://s.gravatar.com/avatar/4095e8ee2ad7e9fa27bd3a69110ce123?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fjo.png",
            github_link: "https://github.com/Joshua-Disney",
            linkedin_link:
              "https://www.linkedin.com/in/joshua-disney-553325176/",
            preferred_pronoun: "They",
            birthday: "1990-01-01"
          },
          {
            username: "james.starks023",
            email: "james.starks023@gmail.com",
            role: "student",
            sub_id: "google-oauth2|102791949397925729676",
            first_name: "James",
            last_name: "Starks",
            pictureURL:
              "https://lh5.googleusercontent.com/-f2ssIvhm75c/AAAAAAAAAAI/AAAAAAAAAEQ/CCDNP4gnMWg/photo.jpg",
            github_link: "https://github.com/Shadowborn",
            linkedin_link: "https://www.linkedin.com/in/james-starks-2547b392/",
            preferred_pronoun: "They",
            birthday: "1990-01-01"
          },
          {
            username: "victornguyen082",
            email: "victornguyen082@gmail.com",
            role: "student",
            sub_id: "google-oauth2|112793741661516564371",
            first_name: "Victor",
            last_name: "Nguyen",
            pictureURL:
              "https://lh3.googleusercontent.com/a-/AAuE7mBjzhX83whQmnFfG1_41T5qAlbybHhjhIetZL5jkA",
            github_link: "https://github.com/victor082",
            linkedin_link:
              "https://www.linkedin.com/in/victor-nguyen-bb5898177/",
            preferred_pronoun: "They",
            birthday: "1990-01-01"
          },
          {
            username: "lappjeff20",
            email: "dadsaidicould200@gmail.com",
            role: "student",
            sub_id: "google-oauth2|11272131231236564371",
            first_name: "Jeff",
            last_name: "Lapp",
            pictureURL:
              "https://lh3.googleusercontent.com/a-/AAuE7mBjzhX83whQmnFfG1_41T5qAlbybHhjhIetZL5jkA",
            github_link: "https://github.com/labs14-lambda-app-store",
            linkedin_link: "https://github.com/lappjeff",
            preferred_pronoun: "They",
            birthday: "1990-01-01"
          },
          {
            username: "lappjeff2000",
            email: "dadsaidicould20@gmail.com",
            role: "student",
            sub_id: "google-oauth2|1127213123121231231564371",
            first_name: "Jeff",
            last_name: "Lapp",
            pictureURL:
              "https://lh3.googleusercontent.com/a-/AAuE7mBjzhX83whQmnFfG1_41T5qAlbybHhjhIetZL5jkA",
            github_link: "https://github.com/labs14-lambda-app-store",
            linkedin_link: "https://github.com/lappjeff",
            preferred_pronoun: "They",
            birthday: "1990-01-01"
          }
        ]);
      })
  );
};
