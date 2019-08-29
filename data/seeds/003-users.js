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
            //1
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
            preferred_pronoun: "They/Them",
            birthday: "1990-01-01"
          },
          {
            //2
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
            preferred_pronoun: "Supreme Overlord",
            birthday: "1990-01-01"
          },
          {
            //3
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
            preferred_pronoun: "They/Them",
            birthday: "1990-01-01"
          },
          {
            //4
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
            preferred_pronoun: "He/Him",
            birthday: "1990-01-01"
          },
          {
            //5
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
            preferred_pronoun: "He/Him",
            birthday: "1990-01-01"
          },
          {
            //6
            username: "blackmacaroon",
            email: "kaylacrow1@gmail.com",
            role: "student",
            sub_id: "google-oauth2|102514629023127459284",
            first_name: "Kayla",
            last_name: "Crow",
            pictureURL:
              "https://lh3.googleusercontent.com/a-/AAuE7mDFzY0-R6e0_kfeSxulIShnq-2FnzuGCntMb_hUNw",
            github_link: "",
            linkedin_link: "",
            preferred_pronoun: "Goddess",
            birthday: ""
          },
          {
            //7
            username: "cp",
            email: "cmp1093@gmail.com",
            role: "student",
            sub_id: "google-oauth2|103983482804230005116",
            first_name: "Chris",
            last_name: "Petito",
            pictureURL:
              "https://lh5.googleusercontent.com/-t9W0QuaQXmI/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3recWf42SXrvEGNnMPHv167hYXk78A/photo.jpg",
            github_link: "https://github.com/chrispetito",
            linkedin_link:
              "https://www.linkedin.com/in/chris-petito-349499184/",
            preferred_pronoun: "He/Him",
            birthday: ""
          },
          {
            //8
            username: "jimmydean62",
            email: "1962jimmy.dean@gmail.com",
            role: "student",
            sub_id: "google-oauth2|1127212315640354457554545165",
            first_name: "Jimmy",
            last_name: "Dean",
            pictureURL:
              "https://lh3.googleusercontent.com/a-/AAuE7mBjzhX83whQmnFfG1_41T5qAlbybHhjhIetZL5jkA",
            github_link: "https://github.com/labs14-lambda-app-store",
            linkedin_link: "https://github.com/jimmydean",
            preferred_pronoun: "He/Him",
            birthday: "1928-08-10"
          },
          {
            //9
            username: "wadewilson",
            email: "deadpool2015@gmail.com",
            role: "student",
            sub_id: "google-oauth2|3",
            first_name: "Wade",
            last_name: "Wilson",
            pictureURL:
              "https://lh3.googleusercontent.com/a-/AAuE7mBjzhX83whQmnFfG1_41T5qAlbybHhjhIetZL5jkA",
            github_link: "https://github.com/labs14-lambda-app-store",
            linkedin_link: "https://github.com/deadpool",
            preferred_pronoun: "Robot/Unicorn",
            birthday: "1991-02-14"
          },
          {
            //10
            username: "raymcclintock",
            email: "mcclintock43@gmail.com",
            role: "student",
            sub_id: "google-oauth2|331616543473545765156453575654",
            first_name: "Ray",
            last_name: "McClintock",
            pictureURL:
              "https://lh3.googleusercontent.com/a-/AAuE7mBjzhX83whQmnFfG1_41T5qAlbybHhjhIetZL5jkA",
            github_link: "https://github.com/labs14-lambda-app-store",
            linkedin_link: "https://github.com/rayray",
            preferred_pronoun: "He/Him",
            birthday: "1992-05-16"
          },
          {
            //11
            username: "aliciakeys27",
            email: "mcclintock43@gmail.com",
            role: "student",
            sub_id: "google-oauth2|3316165434735146848435451441",
            first_name: "Alicia",
            last_name: "Keys",
            pictureURL:
              "https://lh3.googleusercontent.com/a-/AAuE7mBjzhX83whQmnFfG1_41T5qAlbybHhjhIetZL5jkA",
            github_link: "https://github.com/labs14-lambda-app-store",
            linkedin_link: "https://github.com/aliciakeys",
            preferred_pronoun: "She/Her",
            birthday: "1981-01-25"
          },
          {
            //12
            username: "adrirosa",
            email: "rosesarebeautiful@gmail.com",
            role: "student",
            sub_id: "google-oauth2|331616543435454252645333575654",
            first_name: "Adri",
            last_name: "Rosa",
            pictureURL:
              "https://lh3.googleusercontent.com/a-/AAuE7mBjzhX83whQmnFfG1_41T5qAlbybHhjhIetZL5jkA",
            github_link: "https://github.com/labs14-lambda-app-store",
            linkedin_link: "https://github.com/rosaroses",
            preferred_pronoun: "She/Her",
            birthday: "1992-05-16"
          }
        ]);
      })
  );
};
