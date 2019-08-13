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
          //1
          name: "Lambda App Store",
          category_id: 3,
          description:
            "A place for Lambda Students to showcase their beautiful apps!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://lambdaappstore.org/",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?technology,computer,typing",
          is_approved: true
        },
        {
          //2
          name: "Crap Map App",
          category_id: 6,
          description:
            "BM in the AM or PM! Crap Map App finds you the nearest loos with the best reviews!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://thoughtcatalog.com/january-nelson/2018/06/poop-jokes/",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?beans,coffee,bathroom",
          is_approved: false
        },
        {
          //3
          name: "Unicorn Finder",
          category_id: 11,
          description: "Here there be unicorns!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.youtube.com/watch?v=CsGYh8AacgY",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?horse,unicorn,fantasy",
          is_approved: true
        },
        {
          //4
          name: "RePlate",
          category_id: 8,
          description:
            "The only app to bridge the gap from rubbish bins to rumbly tummies! RePlate takes the unused and ugly foods from restaurants and stores before it gets tossed, and gives it to hungry people!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.stvincentdepaul.net/programs",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?food,garbage,earth",
          is_approved: true
        },
        {
          //5
          name: "Prisoner Skills",
          category_id: 3,
          description:
            "Help prepare the incarcerated for life on the outside, use their skillsets to improve their communities, plus earn a sustainable wage to start off on the right foot. Less reoffenders = less wasted tax dollars. No more for-profit prisons.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.netflix.com/title/70242311",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?prison,factory,inmate",
          is_approved: false
        },
        {
          //6
          name: "FancyPlants",
          category_id: 4,
          description:
            "Poky-man go for flowers! Capture photos of flowers on all your travels, extra points for rare varieties and colors.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://en.wikipedia.org/wiki/Animal_Crossing",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?flowers,wildflowers",
          is_approved: true
        },
        {
          //7
          name: "Rangr",
          category_id: 17,
          description:
            "Uses gps to help matches mountain skylines and name the peaks as far as the eye can see!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.bobross.com/Default.asp",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?mountain,peak,forest",
          is_approved: false
        },
        {
          //8
          name: "Mommy",
          category_id: 7,
          description:
            "Mother doesn't live here anymore, but Mommy still knows best! The app that runs your life, because you. can't. even.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://www.amazon.com/My-Way-Highway-Micromanagement-Survival/dp/1576752968",
          submitted_at: "July 18th at 1:00 PM",
          display_image: "https://source.unsplash.com/1600x900/?woman,mom,lady",
          is_approved: true
        },
        {
          //9
          name: "Firefly",
          category_id: 3,
          description: "Teach the babies to code!!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://codecombat.com/",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?babies,kids,firefly",
          is_approved: false
        },
        {
          //10
          name: "Empowered Conversations",
          category_id: 6,
          description:
            "Sometimes the truth is hard. We'll get that ball rolling, you can't take it back but you wont regret it.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://www.psychologytoday.com/us/blog/freudian-sip/201102/how-find-the-best-therapist-you",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?scream,talk,hug",
          is_approved: true
        },
        {
          //11
          name: "Sports Ball",
          category_id: 16,
          description:
            "Make sports fun for people who aren't into sports! stadium food, athlete life drama and outfits",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://www.urbandictionary.com/define.php?term=sportsball",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?football,soccer,basketball",
          is_approved: false
        },
        {
          //12
          name: "Text Adventure",
          category_id: 4,
          description: "Save the world one text based decision at a time",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.makeuseof.com/tag/browser-text-based-games/",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?video-games,games,gaming",
          is_approved: true
        },
        {
          //13
          name: "Tamagotchi 2",
          category_id: 4,
          description:
            "Do you remember how much you loved your Tamagotchi as a child?  Now Tamagotchi is out of the pocket.  Control your 3D printed pet with an easy to use mobile app",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://www.amazon.com/Kids-Electronics-Tamagotchi-Toys-Games/s?rh=n%3A166164011%2Cp_lbr_characters_browse-bin%3ATamagotchi",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?pets,games,toys",
          is_approved: false
        },
        {
          //14
          name: "Tabless Thursday",
          category_id: 2,
          description:
            "An app that helps with organizing tabs and keeping your workspace productive.",
          frontend_url: "https://tabless-thursday-fe.netlify.com",
          backend_url: "https://tabless-thursday-be.herokuapp.com",
          hosted_url: "https://sad-wright-374d2c.netlify.com/",
          submitted_at: "August 1st at 1:00 PM",
          display_image: "https://gyazo.com/8b1384b476d107448cddac75aa9bf233",
          is_approved: true
        },
        {
          //15
          name: "Nifty Market",
          category_id: 4,
          description:
            "A marketplace where gamers can safely buy and sell in-game items for money.",
          frontend_url: "https://github.com/nifty-markets-build/nifty-front",
          backend_url: "https://github.com/nifty-markets-build/nifty-backend",
          hosted_url: "https://niftymarkets.netlify.com/",
          submitted_at: "August 1st at 1:00 PM",
          display_image: "https://gyazo.com/d2dc6a0d2abed761c4d24735aed7b632",
          is_approved: true
        },
        {
          //16
          name: "Navaid Photometric Testr",
          category_id: 1,
          description:
            "the second largest airport in the world relies on an old HP tablet and tech that barely works sometimes.. ",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.flydenver.com/",
          submitted_at: "July 27th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?airport,airplane,airfield",
          is_approved: false
        },
        {
          //17
          name: "Dying To Know",
          category_id: 7,
          description:
            "we're all dying. calculate your lifestyle choices and find out the comprehensive details of how you're most likely to go",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://en.wikipedia.org/wiki/Assisted_suicide",
          submitted_at: "July 28th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?germs,elderly,skydive,fire",
          is_approved: true
        },
        {
          //18
          name: "BB",
          category_id: 3,
          description:
            "app for babies! colors, sounds, buttons, its all a baby needs. stop buying all that cute new plastic junk.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.etsy.com/market/fancy_baby_dress",
          submitted_at: "July 20th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?baby,newborn,infant",
          is_approved: true
        },
        {
          //19
          name: "Mimi & Poppy",
          category_id: 11,
          description:
            "respect your elders! but only the good ones. don't have your own? borrow ours!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://seniorpath.com/common-assisted-living-issues/",
          submitted_at: "July 14th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?grandmother,grandfather,elderly",
          is_approved: false
        },
        {
          //20
          name: "Grinder",
          category_id: 8,
          description:
            "Bacon tenderloin ham jowel ribeye striploin flank flatiron t-bone baby back drumstick brisket shortrib ",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://mishkahenner.com/Feedlots",
          submitted_at: "July 2th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?meat,butcher,steak",
          is_approved: true
        },
        {
          //21
          name: "iBrthday",
          category_id: 12,
          description:
            "host, organize, invite, decorate, cater, rent, register - all with the swipe of a finger!",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.hallmark.com/birthday/",
          submitted_at: "July 3th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?birthday,cake,wine",
          is_approved: false
        },
        {
          //22
          name: "Crows",
          category_id: 5,
          description: "CAW. CAW. CAW. caw caw caw caw caw caw caw. CAW. ",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://greenkansas.wixsite.com/theappleseedcast/merch",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?blackbird,crow,raven",
          is_approved: true
        },
        {
          //23
          name: "McFry",
          category_id: 15,
          description: "never eat oversalted soggy fries again",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://frenchfriesmachine.com/blog.html",
          submitted_at: "July 18th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?fries,frenchfry,fry",
          is_approved: false
        },
        {
          //24
          name: "Pants On Fire",
          category_id: 9,
          description:
            "stop lying to your parents, stop lying to your school, stop lying to yourself.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://www.wikihow.com/Stop-Lying",
          submitted_at: "July 31th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?flame,spiderweb,cave",
          is_approved: true
        },
        {
          //25
          name: "Run with Scissors",
          category_id: 4,
          description: "its fun! and other great advice.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://runsignup.com/Race/CO/Brighton/RunsWithScissorsRaces",
          submitted_at: "July 30th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?scissors,forest,pool",
          is_approved: false
        },
        {
          //26
          name: "Good Behavior",
          category_id: 14,
          description:
            "Hide your kids. Realtime feed of incarcerated ped*ph*les/rap*sts release date, address, description.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://www.themarshallproject.org/2019/04/03/when-violent-offenders-commit-nonviolent-crimes",
          submitted_at: "July 27th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?house,neighborhood,suburb",
          is_approved: true
        },
        {
          //27
          name: "Do Go",
          category_id: 17,
          description: "chasing waterfalls. explore, rate, review",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "http://www.angelfire.com/ca4/illimattic/fanclub.html",
          submitted_at: "July 24th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?waterfall,river,glacier",
          is_approved: false
        },
        {
          //28
          name: "Doggo",
          category_id: 10,
          description:
            "books for dogs? books is a weird category. we do need a miscelaneous category though",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url:
            "https://thebark.com/content/reading-dogs-help-children-learn",
          submitted_at: "July 16th at 1:00 PM",
          display_image: "https://source.unsplash.com/1600x900/?puppy,dog,wolf",
          is_approved: true
        },
        {
          //29
          name: "PlanIt Change",
          category_id: 18,
          description: "because we have less than ten years.",
          frontend_url: "https://github.com/labs14-lambda-app-store/be2",
          backend_url: "https://github.com/labs14-lambda-app-store/FE2",
          hosted_url: "https://twitter.com/planitchange10?lang=en",
          submitted_at: "July 1th at 1:00 PM",
          display_image:
            "https://source.unsplash.com/1600x900/?earth,ocean,glacier",
          is_approved: false
        }
      ]);
    });
};
