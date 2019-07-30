exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex
    .raw(
      "TRUNCATE TABLE projects RESTART IDENTITY CASCADE"
    ) /* This .raw function allows for truncation while being referenced in a foreign key */
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Lambda App Store",
          category_name: "education",
          description:
            "A place for Lambda Students to showcase their beautiful apps!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "www.lambdaappstore.org",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?technology,computer,typing"
        },
        {
          name: "Crap Map App",
          category_name: "medical",
          description:
            "BM in the AM or PM! Crap Map App finds you the nearest loos with the best reviews!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "example hosted url 1",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?beans,coffee,bathroom"
        },
        {
          name: "Unicorn Finder",
          category_name: "social networking",
          description: "Here there be unicorns!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "example hosted url 2",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?horse,unicorn,fantasy"
        },
        {
          name: "RePlate",
          category_name: "food & drink",
          description:
            "The only app to bridge the gap from rubbish bins to rumbly tummies! RePlate takes the unused and ugly foods from restaurants and stores before it gets tossed, to rots in a landfill and turn into methane, aka the invisible wool blanket around the planet trapping all the heat.... and gives it to hungry people!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "example hosted url 3",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?food,garbage,earth"
        },
        {
          name: "Prisoner Skills",
          category_name: "education",
          description:
            "Help prepare the incarcerated for life on the outside, use their skillsets to improve their communities, plus earn a sustainable wage to start off on the right foot. Less reoffenders = less wasted tax dollars. No more for-profit prisons.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "example hosted url 4",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?prison,factory,inmate"
        },
        {
          name: "FancyPlants",
          category_name: "games",
          description:
            "Poky-man go for flowers! Capture photos of flowers on all your travels, extra points for rare varieties and colors.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "example hosted url 5",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?flowers,wildflowers"
        },
        {
          name: "Rangr",
          category_name: "travel",
          description:
            "Uses gps to help matches mountain skylines and name the peaks as far as the eye can see!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "example hosted url 6",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?mountain,peak,forest"
        },
        {
          name: "Mommy",
          category_name: "health & fitness",
          description:
            "Mother doesn't live here anymore, but Mommy still knows best! The app that runs your life, because you. can't. even.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "example hosted url 7",
          submitted_at: "July 18th at 1:00 PM",
          display_image: "https://source.unsplash.com/1600x900/?woman,mom,lady"
        },
        {
          name: "Firefly",
          category_name: "education",
          description: "Teach the babies to code!!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "example hosted url 8",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?babies,kids,firefly"
        },
        {
          name: "Empowered Conversations",
          category_name: "medical",
          description:
            "Sometimes the truth is hard. We'll get that ball rolling, you can't take it back but you wont regret it.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "example hosted url 9",
          submitted_at: "July 18th at 1:00 PM",
          display_image: "https://source.unsplash.com/1600x900/?scream,talk,hug"
        },
        {
          name: "Sports Ball",
          category_name: "sports",
          description:
            "Make sports fun for people who aren't into sports! stadium food, athlete life drama and outfits",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "example hosted url 10",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?football,soccer,basketball"
        }
      ]);
    });
};
