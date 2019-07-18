exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Lambda App Store 1",
          category_id: 1,
          description: "A place for Lambda Students to showcase their beautiful apps!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          submitted_at: 'July 18th at 1:00 PM',
          display_image: 'example url',
          tags: 'example tags',
        },
        {
          name: "Lambda App Store 2",
          category_id: 1,
          description: "A place for Lambda Students to showcase their beautiful apps!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          submitted_at: 'July 18th at 1:00 PM',
          display_image: 'example url',
          tags: 'example tags',
        },
        {
          name: "Lambda App Store 3",
          category_id: 1,
          description: "A place for Lambda Students to showcase their beautiful apps!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          submitted_at: 'July 18th at 1:00 PM',
          display_image: 'example url',
          tags: 'example tags',
        }
      ]);
    });
};
