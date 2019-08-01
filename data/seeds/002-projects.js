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
          hosted_url:
            "https://thoughtcatalog.com/january-nelson/2018/06/poop-jokes/",
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
          hosted_url: "https://www.youtube.com/watch?v=CsGYh8AacgY",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?horse,unicorn,fantasy"
        },
        {
          name: "RePlate",
          category_name: "food & drink",
          description:
            "The only app to bridge the gap from rubbish bins to rumbly tummies! RePlate takes the unused and ugly foods from restaurants and stores before it gets tossed, and gives it to hungry people!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.stvincentdepaul.net/programs",
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
          hosted_url: "https://www.netflix.com/title/70242311",
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
          hosted_url: "https://en.wikipedia.org/wiki/Animal_Crossing",
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
          hosted_url: "https://www.bobross.com/Default.asp",
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
          hosted_url:
            "https://www.amazon.com/My-Way-Highway-Micromanagement-Survival/dp/1576752968",
          submitted_at: "July 18th at 1:00 PM",
          display_image: "https://source.unsplash.com/1600x900/?woman,mom,lady"
        },
        {
          name: "Firefly",
          category_name: "education",
          description: "Teach the babies to code!!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://codecombat.com/",
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
          hosted_url:
            "https://www.psychologytoday.com/us/blog/freudian-sip/201102/how-find-the-best-therapist-you",
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
          hosted_url:
            "https://www.urbandictionary.com/define.php?term=sportsball",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?football,soccer,basketball"
        },
        {
          name: "Text Adventure",
          category_name: "games",
          description: "Save the world one text based decision at a time",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.makeuseof.com/tag/browser-text-based-games/",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?video-games,games,gaming"
        },
        {
          name: "Tamagotchi 2",
          category_name: "games",
          description:
            "Do you remember how much you loved your Tamagotchi as a child?  Now Tamagotchi is out of the pocket.  Control your 3D printed pet with an easy to use mobile app",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://www.amazon.com/Kids-Electronics-Tamagotchi-Toys-Games/s?rh=n%3A166164011%2Cp_lbr_characters_browse-bin%3ATamagotchi",
          submitted_at: "July 18th at 1:00 PM",
          display_image: "https://source.unsplash.com/1600x900/?pets,games,toys"
        },
        {
          name: "Tabless Thursday",
          category_name: "Entertainment",
          description:
            "An app that helps with organizing tabs and keeping your workspace productive.",
          frontend_url: "https://tabless-thursday-fe.netlify.com",
          backend_url: "https://tabless-thursday-be.herokuapp.com",
          hosted_url: "https://sad-wright-374d2c.netlify.com/",
          submitted_at: "August 1st at 1:00 PM",
          display_image: "https://gyazo.com/8b1384b476d107448cddac75aa9bf233"
        },
        {
          name: "Nifty Market",
          category_name: "Games",
          description:
            "A marketplace where gamers can safely buy and sell in-game items for money.",
          frontend_url: "https://github.com/nifty-markets-build/nifty-front",
          backend_url: "https://github.com/nifty-markets-build/nifty-backend",
          hosted_url: "https://niftymarkets.netlify.com/",
          submitted_at: "August 1st at 1:00 PM",
          display_image: "https://gyazo.com/d2dc6a0d2abed761c4d24735aed7b632"
        },
        {
          name: "Navaid Photometric Testr",
          category_name: "business",
          description:
            "the second largest airport in the world relies on an old HP tablet and tech that barely works sometimes.. ",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.flydenver.com/",
          submitted_at: "July 27th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?airport,airplane,airfield"
        },
        {
          name: "Dying To Know",
          category_name: "health & fitness",
          description:
            "we're all dying. calculate your lifestyle choices and find out the comprehensive details of how you're most likely to go",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://en.wikipedia.org/wiki/Assisted_suicide",
          submitted_at: "July 28th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?germs,elderly,skydive,fire"
        },
        {
          name: "BB",
          category_name: "education",
          description:
            "app for babies! colors, sounds, buttons, its all a baby needs. stop buying all that cute new plastic junk.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.etsy.com/market/fancy_baby_dress",
          submitted_at: "July 20th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?baby,newborn,infant"
        },
        {
          name: "Mimi & Poppy",
          category_name: "Social Networking",
          description:
            "respect your elders! but only the good ones. don't have your own? borrow ours!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://seniorpath.com/common-assisted-living-issues/",
          submitted_at: "July 14th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?grandmother,grandfather,elderly"
        },
        {
          name: "Grinder",
          category_name: "food & drink",
          description:
            "Bacon tenderloin ham jowel ribeye striploin flank flatiron t-bone baby back drumstick brisket shortrib ",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://mishkahenner.com/Feedlots",
          submitted_at: "July 2th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?meat,butcher,steak"
        },
        {
          name: "iBrthday",
          category_name: "shopping",
          description:
            "host, organize, invite, decorate, cater, rent, register - all with the swipe of a finger!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.hallmark.com/birthday/",
          submitted_at: "July 3th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?birthday,cake,wine"
        },
        {
          name: "Crows",
          category_name: "music",
          description: "CAW. CAW. CAW. caw caw caw caw caw caw caw. CAW. ",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://greenkansas.wixsite.com/theappleseedcast/merch",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?blackbird,crow,raven"
        },
        {
          name: "McFry",
          category_name: "navigation",
          description: "never eat oversalted soggy fries again",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://frenchfriesmachine.com/blog.html",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?fries,frenchfry,fry"
        },
        {
          name: "Pants On Fire",
          category_name: "finance",
          description:
            "stop lying to your parents, stop lying to your school, stop lying to yourself.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.wikihow.com/Stop-Lying",
          submitted_at: "July 31th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?flame,spiderweb,cave"
        },
        {
          name: "Run with Scissors",
          category_name: "games",
          description: "its fun! and other great advice.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://runsignup.com/Race/CO/Brighton/RunsWithScissorsRaces",
          submitted_at: "July 30th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?scissors,forest,pool"
        },
        {
          name: "Good Behavior",
          category_name: "news",
          description:
            "Hide your kids. Realtime feed of incarcerated ped*ph*les/rap*sts release date, address, description.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://www.themarshallproject.org/2019/04/03/when-violent-offenders-commit-nonviolent-crimes",
          submitted_at: "July 27th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?house,neighborhood,suburb"
        },
        {
          name: "Do Go",
          category_name: "travel",
          description: "chasing waterfalls. explore, rate, review",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "http://www.angelfire.com/ca4/illimattic/fanclub.html",
          submitted_at: "July 24th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?waterfall,river,glacier"
        },
        {
          name: "Doggo",
          category_name: "books",
          description:
            "books for dogs? books is a weird category. we do need a miscelaneous category though",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://thebark.com/content/reading-dogs-help-children-learn",
          submitted_at: "July 16th at 1:00 PM",
          display_image: "https://source.unsplash.com/1600x900/?puppy,dog,wolf"
        },
        {
          name: "PlanIt Change",
          category_name: "weather",
          description: "because we have less than ten years.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://twitter.com/planitchange10?lang=en",
          submitted_at: "July 1th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?earth,ocean,glacier"
        }
      ]);
    });
};
