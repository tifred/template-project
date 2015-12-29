'use strict';

/*
   The mainImgIdx should always be 0.
   The 0th image should always have "MAIN" in the name.
   All the MAIN images should have an identical width to height ratio.
   e.g. 3:2.
   These all happen to be 1000 to 667.
   Why? Because they will all appear in a grid on the main page.
   Using the same size/ratio makes them line up nicely.
   This may require cropping the original images.

   Other images can be at different ratios   
   In fact, one might want to include an uncropped version of the MAIN image.
   in the "images" array.
*/

var extraPages = [
  {
    pageName: "AboutMe",
    textCol1: '<p><strong>&nbsp;MY PASSION FOR PHOTOGRAPHY DEVELOPED LATE IN LIFE.</strong>&nbsp; After getting a master\'s degree in Journalism from UC Berkeley I was a freelance writer, and magazine editor, publishing feature stories in national magazines (see list below).&nbsp; In l992 I wrote an adventure travel book (still in print) about a river trip that turned into a nightmare: “Shooting the Boh: One Woman\'s Voyage Down The Wildest River in Borneo."&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp; While writing my second book, "Peace In The House," about how polygamous marriages work in Northern Nigeria, I got a permanent case of repetitive stress in my hands. No more writing books. Not much writing at all. What to do?&nbsp; Fortunately I found an answer: Keep on exploring little known places\; keep on telling those stories,&nbsp; but do it now with a camera. This has allowed me to continue my adventures while learning to see things in a new way — up close and visual.&nbsp; In 2010, I went back to Nigeria as a photographer, but since then I\'ve been sticking closer to home — taking road trips but mostly exploring my own backyard: West Oakland.</p><p><em>*Published in New York Times Magazine, Village Voice, New West, Playboy, Ms., Redbook, Vogue, Cosmopolitan, Harper’s Bazaar, California, and many local newspapers and magazines. *Managing Editor of The Los Angeles Weekly; Northern California editor of California Magazine; Editor of The Berkeley Monthly; and Transitional Editor of San Francisco Magazine. </em></p>',
    textCol2: "",
    images: [
      {
	img: "aboutme",
	captionText: "Photo by Reed Cooper",
	alt: "Woman with Camera"
      }
    ]
  },
  {
    pageName: "Contact",
    textCol1: '<p>Contact me at tracyjohnston@comcast.net.</p>',
    textCol2: "",
    images: [
      {
	img: "contact",
	captionText: "",
	alt: "Woman Smiling"
      }
    ]
  },
  {
    pageName: "LongArtMain",
    title1: "DESERT RATS",
    title2: "LA VIDA LOCA",
    textCol1: '<p>DOWN CARSON pass from San Francisco came the urban woman in a Japanese car filled with Diet Cokes and Western history books, country music filling up every sensual space but the view, which at the moment was beyond the grasp of anything mortal: a vast, high desert stretching east to Utah filled with mountain ranges dropped from the cosmos like rumpled pieces of silk. Dry lake beds appeared like mirages; great swirling circles in chalk.&nbsp; The woman headed into it all awash in melodrama...<br><br><a href="/magazine-writing-1-2-1">click to continue reading</a></p>',
    textCol2: '<p>Spider had his melancholy expression, the one that always made Loca forgive him. His sable brown eyes looked so sympathetic and sad that she forgot about the ways he treated her bad, the times he messed up on her with other girls, or went out shooting with his home boys. She was feeling sorry for him even before he had the hallucinations. He was a <em>vato loco</em>, a crazy guy in the East Los Angeles barrios , but it was because he didn\'t give a fuck about...<br><br><a href="/la-vida-loca">click to continue reading</a></p>',
    images: [
      {
	img: "desertman",
	captionText: "",
	alt: "Older Man Smiling"
      },
      {
	img: "loco",
	captionText: "",
	alt: "Kids on the street"
      }
    ]
  }
]

var initialSeries = [
  {
    seriesName: "skate",
    seriesCaption: "West Oakland\'s controversial skateboard park",
    mainImgIdx: 0,
    artImgIdx: 2,
    artTitle: "LIFE SUCKS",
    artText: '<p><strong>I HAPPENED UPON THIS SKATEPARK </strong>when it was being built on a long abandoned lot in West Oakland, right next to a freeway and the warehouse where I was photographing Bob Rosenberg (see my West Oakland gallery). There turned out to be no permissions, no permits,&nbsp; and no one getting paid. It was part of a DIY,&nbsp; Build-a-Skatepark movement that started in Portland Oregon in l990, with the cost of materials donated by skateboard magazines and sponsors. The idea is for skaters and their supporters in the construction business to build a park fast (this one in just under 5 months), open it up for public use (put a hole in the chain-link fence the city puts up) and hope the city doesn\'t tear it down.</p><p>I loved watching the skaters, of course, but ended up being more interested in a culture I hadn\'t really seen as a girl and an only child. There isn\'t really a word for it other than "testosterone," or "boys will be boys." In the skating world it\'s mostly alienated urban kids whose mottos are "freedom" and "life sucks." They want to fall hard, feel free, skate well and get high. I found a brotherhood of kids feeling strong and brave and happy together,&nbsp; if only for a time.</p>',
    artTextTwo: '',
    images: [
      {
        img: "skate_0_MAIN",
        captionText: "Start the skating, dude",
        altText: "People skating"
      },
      {
        img: "skate_1",
        captionText: "My arm!",
        altText: "People biffing"
      },
      {
        img: "skate_2",
        captionText: "Horsing around",
        altText: "People standing around"
      },
      {
        img: "skate_3",
        captionText: "Start the skating, DUDE, PLEASE!",
        altText: "People skating"
      },
    ]
  },
  {
    seriesName: "westoak",
    seriesCaption: "Life in West Oakland series",
    mainImgIdx: 0,
    artImgIdx: 1,
    artTitle: "WEST OAKLAND",
    artText: '<p><strong>I STARTED PHOTOGRAPHING WEST OAKLAND </strong>on its outer edges because I had no idea what was there and I love to explore. I had spent a lot of time in third world countries but not in the poor and forgotten areas of my own home town. The first thing I found near the train tracks and freeways were the homeless, the addicts, and the recycling underworld — people living in“deep poverty," which is officially defined as less than $8.36 a day.&nbsp; Heading just a few blocks inland I found West Oakland\'s old black community — the men and women whose families had fled rural Louisiana and Texas during WWII to work in the booming railroads and shipyards. These folk were easy to find because many of the family homes and apartments had become so crowded daily life spilled into the streets.&nbsp;</p><p>Gentrification is not new, but it\'s now on hyper-speed in West Oakland due to white and Asian workers in San Francisco flooding in. They themselves are usually refugees — from a city whose "affordable housing" goes to families making up to $150,000 a year.&nbsp; Large condo developments are going up in West Oakland, faux Victorian houses are being built, and a dilapidated Victorian fixer-upper can go for a half a million dollars. Many of the old manufacturing plantsare being turned into beautiful but pricey lofts. The mostly young, white, artists and BART commuters moving in say they love the diversity,&nbsp; the good weather and the fun, urban hipster vibe. But where is a grocery store? And why is trash dumped everywhere?&nbsp; And what can a liberal white person do about all the crime and black-on-black homicides?</p><p><strong>A BRIEF HISTORY</strong>: At the turn of the century West Oakland was blessed. It was the terminal of the transcontinental railroad and where the ferry to San Francisco took off. It\'s grand old Victorians were built in the late 1800s by European immigrants, mostly Italians and Portuguese.&nbsp; After the l906 earthquake in San Francisco a lot of smaller Victorians were built in West Oakland as well as parks and schools. In the l930s the neighborhood went through its first change when most of it became zoned for manufacturing.&nbsp; During WWII West Oakland changed again as African-Americans flooded in. Old-timers say the best time in West Oakland was in the l940s and \'50s when it was a crowded, bustling, majority African American boom town. There was racism and red-lining and neglect by politicians, but unions were strong and the money was good and the churches and schools and nightclubs flourished.&nbsp; Women worked, often in white people\'s homes, but they had their own local clubs and associations.</p>',
    artTextTwo: '<p>&nbsp;The blues came to West Oakland via the Pullman porters who traveled to Chicago and New York, and restaurants, bars and nightclubs followed. Clubs like Slim Jenkins hosted big names — Aretha Franklin, Ray Charles, Ike and Tina Turner — and the California Hotel became a gathering spot for the black musicians and performers who weren\'t welcome in San Francisco.</p><p>The neighborhood started to decline in the l950\'s when a freeway cut through it and manufacturing jobs dried up. Urban renewal projects and a regional post office destroyed hundreds of the old Victorian homes. In 1966 The Black Panther Party was born in West Oakland with it\'s message of self-defense against police brutality. The Panthers evolved to sponsor local, self-help programs, and for a time had offices in cities all over the US. Then political in-fighting weakened the movement plus harassment and incarceration by the FBI. The end of the Panthers came when Huey Newton was shot by his drug dealer and Eldrige Cleaver went off the rails and supported Ronald Regan. The blues clubs lasted until the l970\'s when noise from the new BART train wiped them out. In the late l980s and l990s,&nbsp; a crack epidemic bottomed out the community and the neighborhood hit rock-bottom. Today drug-use is down and schools have improved but there still is a school-to-prison pipeline. There is also a lot of friendliness and good will that remains in the neighborhood, and on a summer day parts of West Oakland feel like a small town in the rural South.</p>',
    images: [
      {
        img: "westoak_0_MAIN",
        captionText: "People in Oaktown",
        altText: "People in street"
      },
      {
        img: "westoak_1",
        captionText: "His name is Al",
        altText: "Man in car"
      },
      {
        img: "westoak_2",
        captionText: "To the store",
        altText: "People in store"
      },
      {
        img: "westoak_3",
        captionText: "People in Oaktown, Yo",
        altText: "People in street"
      },
    ]
  },
  {
    seriesName: "homeless",
    seriesCaption: "Homesless series: West Oakland and Salinas",
    mainImgIdx: 0,
    artImgIdx: 1,
    artTitle: "AMONG THE HOMELESS",
    artText: '<p><strong>I\'VE SEEN HOMELESS PEOPLE</strong>, of course, but until I approached them with a camera I had never studied their faces; never heard their stories; never understood that no one now, not even mothers, has a safety net. Today a mother of a single child gets less than $400 a month and that for only <em>four years during her entire lifetime!</em></p><p>Some people in this gallery are homeless by choice – the kids, for instance, who ride the rails. They drink a lot and live in packs but when it stops being fun they go home. Others are homeless not by choice but because they can\'t hold a job due to mental illness or addiction. And even if they qualify for the highest amount of disability welfare, SSI, (around $889-a-month), it\'s not enough to pay for rent in the Bay Area, no less clothing, utilities and transportation. Mothers, I found out, have even less support. After the welfare-to-work program passed in l996 a mother of four will get less than $900 a month for a maximum of four years <em>during her entire lifetime!&nbsp;</em> Felons coming out of jail or prison have a particularly hard time as they are banned from staying with anyone, even familly or friends,&nbsp; who live in most kinds of low-income housing. For some felons the risk of going back to prison makes more sense than living on handouts.</p><p>Still, most homeless people aren\'t criminals: they are too sorry or too old for that. They don\'t victimize; they are victims. And when you know their childhood stories and medical histories it\'s pretty clear they never had a chance.</p>',
    artTextTwo: '<em>I never photograph people without asking for permission and if they\'re homeless I may give them a few bucks. My attitude towards giving money to homeless people is unambiguous: I do it because I know it will help them get through their day.&nbsp;&nbsp;</em>',
    images: [
      {
        img: "homeless_0_MAIN",
        captionText: "Sample Text",
        altText: "People in street"
      },
      {
        img: "homeless_1",
        captionText: "Sample Text",
        altText: "Man in car"
      },
      {
        img: "homeless_2",
        captionText: "Sample Text",
        altText: "People in store"
      },
      {
        img: "homeless_3",
        captionText: "Sample Text",
        altText: "People in street"
      },
    ]
  },
  {
    seriesName: "rust",
    seriesCaption: "Rust series",
    mainImgIdx: 0,
    artImgIdx: 1,
    artTitle: "RUST AMONG US",
    artText: '<p><strong>I\'VE ALWAYS BEEN</strong><strong> ATTRACTED </strong>to the pipes and wheels of old machines, so of course I discovered rust. Iron changes shape as it comes into contact with oxygen; paint peels and bubbles and comes off.&nbsp; With time, all of it looks great.</p><p>I\'m not sure why rust seems to go with every other color, but it does — even orange. And people seem to understand that machines will decay looking good if they paint them with the brightest of primary colors.&nbsp;<br><br>&nbsp;</p>',
    artTextTwo: '',
    images: [
      {
        img: "rust_0_MAIN",
        captionText: "Sample Text",
        altText: "People in street"
      },
      {
        img: "rust_1",
        captionText: "Sample Text",
        altText: "Man in car"
      },
      {
        img: "rust_2",
        captionText: "Sample Text",
        altText: "People in store"
      },
      {
        img: "rust_3",
        captionText: "Sample Text",
        altText: "People in street"
      },
    ]
  },
  {
    seriesName: "road",
    seriesCaption: "On the road.",
    mainImgIdx: 0,
    artImgIdx: 2,
    artTitle: "ON THE ROAD",
    artText: '<p><strong>T</strong><strong>HESE ARE SOME</strong> <strong>PHOTOS</strong> from my local wanderings and desert road trips through Utah, Nevada and California. I love that my camera gives me an excuse to go exploring in this wonderful part of the world.&nbsp; I ended up talking to a lot of guys like this one -- friendly people with time on their hands who hold forth in local bars.&nbsp; To the right of him, on the bar, is my road map and car keys. A great way to meet locals is to drive down back roads and not know where you end up.&nbsp;</p>',
    artTextTwo: '',
    images: [
      {
        img: "road_0_MAIN",
        captionText: "Sample Text",
        altText: "People in street"
      },
      {
        img: "road_1",
        captionText: "Sample Text",
        altText: "Man in car"
      },
      {
        img: "road_2",
        captionText: "Sample Text",
        altText: "People in store"
      },
      {
        img: "road_3",
        captionText: "Sample Text",
        altText: "People in street"
      },
    ]
  },
  {
    seriesName: "easter",
    seriesCaption: "Easter Sunday in West Oakland",
    mainImgIdx: 0,
    artImgIdx: 1,
    artTitle: "AT THE CHURCH",
    artText: '<p><strong>THESE ARE THE FACES FROM THREE "OLD SCHOOL"” </strong>churches in West Oakland — snapshots taken on Easter Sunday, 2015. They are the faces of the black community\'s "solid citizens." The men in these photos have probably always worked; the women have either worked or been active in church and volunteer organizations. Most are well educated. Their roots go back to Texas or Louisiana, the southern end of the railroad line that took their families to California during WWII in search of jobs. In the l940s, in Jim Crow south, it was almost impossible for African-Americans to succeed. Segregation wasn\'t just about not being able to vote or having separate schools. It was about having to step off the sidewalk to let a white person pass. None of these solid citizens say racism is over because too many black people are in desperate straits.</p>',
    artTextTwo: '',
    images: [
      {
        img: "easter_0_MAIN",
        captionText: "Sample Text",
        altText: "People in street"
      },
      {
        img: "easter_1",
        captionText: "Sample Text",
        altText: "Man in car"
      },
      {
        img: "easter_2",
        captionText: "Sample Text",
        altText: "People in store"
      },
      {
        img: "easter_3",
        captionText: "Sample Text",
        altText: "People in street"
      },
    ]
  },
  {
    seriesName: "kano",
    seriesCaption: "Kano, Nigeria, 2010",
    mainImgIdx: 0,
    artImgIdx: 2,
    artTitle: "IN KANO",
    artText: '<p><strong>KANO IS CLOSE TO MY HEART</strong>. It\'s crowded, hot, dusty and ugly, but I spent four happy months there during three visits in the l990s, researching a book about marriage. I loved the people and their willingness to laugh and enjoy good conversation and I was in awe of their effortless social graces. When I couldn\'t finish my book (see About Me) I went back to Kano in 2010,&nbsp; this time with a camera looking for visual narratives. Kano was still fairly safe and I could walk around freely with my camera but people\'s attitude towards me had changed.&nbsp; America had just helped the French bomb Libya, a Muslim country whose leader favored black Africans over Arabs. The US press thought it was a good idea and I didn\'t know any better. Also, most people suspected that I was, like most journalists, there to get stories only about disease, corruption and poverty.</p><p>An Islamic fundamentalist terrorist group had just formed — Boko Haram — but no one wanted to talk about it. I couldn\'t figure out why until I realized even my educated Nigerian friend thought the CIA was behind it: we wanted to destabilize Nigeria and take its oil.<br><br>I hired two guides part-time since there were no rental cars and driving had become seriously chaotic. One was the editor of a weekly English language newspaper and the “head” of a private secondary school run by his wife. (This will give you some idea of the state of the economy: He needed a third job.) The other was a guy who carved out a living working for the academics who come to Kano, usually for months at a time. Both men were smart and likable but only one had a car. This meant I spent time on the back of his motorcycle, stalled in traffic, in a clearly overpopulated city of maybe six million people, breathing in a lifetime of exhaust.</p><p>As for the conservative Islam practiced by the Hausa people — I was impressed by it in the l990s. All religions encourage people to be good and do good, and Islam had managed to keep Northern Nigeria a lot safer than the South. Traditional rulers and Islamic teachers solved a lot of conflicts before they became violent or ended up in corrupt, western-style, courts. The attitude towards Christians did worry me, as did prejudice against other tribes.</p>',
    artTextTwo: '<p>The question of women\'s rights was more complicated. Hausa society was, and still is, very patriarchal and hierarchical: sons and daughters must obey their elders and women must obey their husbands. If a husband divorces his wife (which happens frequently) she will get support from her family but she must obey her fathers or elder brothers. Many women in northern Nigeria still live in "traditional households" where they must get permission from their husbands before leaving the house. But there is one good sign for women\'s rights and that is education. Because Nigerian Muslims believe that Islam encourages education, just about every boy and girl in Kano, and even in the rural villages, wants to go to school. Girls are flooding into the universities as well, and in the high school my guide and his wife run, there are more girls than boys. Whether the educational system can handle the influx is another question. For whatever reason, the quality of education in Kano\'s Bayero University has declined. It could be that more students are coming from traditional and rural schools where the main curriculum is memorizing the Koran. And since elders are the ultimate authority on everything in Kano, students often don\'t know how to ask questions and challenge answers.</p>',
    images: [
      {
        img: "kano_0_MAIN",
        captionText: "Sample Text",
        altText: "People in street"
      },
      {
        img: "kano_1",
        captionText: "Sample Text",
        altText: "Man in car"
      },
      {
        img: "kano_2",
        captionText: "Sample Text",
        altText: "People in store"
      },
      {
        img: "kano_3",
        captionText: "Sample Text",
        altText: "People in street"
      },
    ]
  },
  {
    seriesName: "grainmkt",
    seriesCaption: "Grain market, Kano, Nigeria",
    mainImgIdx: 0,
    artImgIdx: 1,
    artTitle: "AT THE GRAIN MARKET",
    artText: '<p><strong>I WENT TO NIGERIA IN 2010 </strong>looking for something good in Africa that was not set up by a foreign NGO. What I found was a huge grain market just outside Kano in Muslim Northern Nigeria. I was there at the end of the four-month rainy season when enormous trucks were coming in from as far away as Mali and Ghana and leaving with sacks of sorghum, peanuts, millet and maize. The Hausa people who dominate the area are known to be good farmers and traders and as far as I could see the market was well-run. It had a chairman and elected officers and five separate market associations. The workers had a union and were happy to have a job even it it paid only a few dollars a day. As for corruption, it was surely there, but of course I couldn\'t see it.&nbsp;</p><p>Because cassava and maize were milled in the market I photographed the white flour dust as it settled on black faces—the reverse of those iconic American images of black coal dust on white faces. Breathing in flour isn\'t as bad as breathing in coal, but when I got home and showed some of these photos to friends they asked a lot of questions about what would happen to their lungs.&nbsp;</p><p>I have no photos of the market at night because various association heads shooed me away. I was told theft wasn\'t a big problem and prostitutes had been kicked out of the trucking area when Shariah came to Kano in 2000, so maybe the problem was that I was a woman in a patriarchal society and my place, especially at night, was with my family in my home.&nbsp;</p>',
    artTextTwo: '',
    images: [
      {
        img: "grainmkt_0_MAIN",
        captionText: "Sample Text",
        altText: "People in street"
      },
      {
        img: "grainmkt_1",
        captionText: "Sample Text",
        altText: "Man in car"
      },
      {
        img: "grainmkt_2",
        captionText: "Sample Text",
        altText: "People in store"
      },
      {
        img: "grainmkt_3",
        captionText: "Sample Text",
        altText: "People in street"
      },
    ]
  },
];


var Series = function(data) {
  this.seriesName = data.seriesName;
  this.seriesCaption = data.seriesCaption;

  this.mainImg = data.images[data.mainImgIdx].img;
  this.mainCaptionText = this.seriesCaption;
  this.mainAltText = data.images[data.mainImgIdx].altText;

  this.artImg = data.images[data.artImgIdx].img;
  this.artCaptionText = data.images[data.artImgIdx].captionText;
  this.artAltText = data.images[data.artImgIdx].altText;
  this.artTitle = data.artTitle;
  this.artText = data.artText;
  this.artTextTwo = data.artTextTwo;

  this.mainImgPath = "images/" + this.seriesName + "/" + this.mainImg;
  this.mainSrc = this.mainImgPath + "-640.jpg";
  this.mainSrcset = this.mainImgPath + "-1000.jpg 1000w," +
                this.mainImgPath + "-640.jpg 640w," +
                this.mainImgPath + "-540.jpg 540w," +
                this.mainImgPath + "-440.jpg 440w," +
                this.mainImgPath + "-330.jpg 330w," +
                this.mainImgPath + "-270.jpg 270w," +
                this.mainImgPath + "-220.jpg 220w," +
                this.mainImgPath + "-165.jpg 165w,";
  this.mainSizes = "(min-width: 768px) 25vw, 100vw";

  this.artImgPath = "images/" + this.seriesName + "/" + this.artImg;
  this.artSrc = this.artImgPath + "-640.jpg";
  this.artSrcset = this.artImgPath + "-1000.jpg 1000w," +
                this.artImgPath + "-640.jpg 640w," +
                this.artImgPath + "-540.jpg 540w," +
                this.artImgPath + "-440.jpg 440w," +
                this.artImgPath + "-330.jpg 330w," +
                this.artImgPath + "-270.jpg 270w," +
                this.artImgPath + "-220.jpg 220w," +
                this.artImgPath + "-165.jpg 165w,";
  this.artSizes = "(min-width: 768px) 58vw, 100vw";
};

var Image = function(imageData, seriesName) {
  this.seriesName = seriesName;
  this.img = imageData.img;
  this.captionText = imageData.captionText;
  this.altText = imageData.altText;

  this.imgPath = "images/" + this.seriesName + "/" + this.img;
  this.src = this.imgPath + "-640.jpg";
  this.srcset = this.imgPath + "-1000.jpg 1000w," +
                this.imgPath + "-640.jpg 640w," +
                this.imgPath + "-540.jpg 540w," +
                this.imgPath + "-440.jpg 440w," +
                this.imgPath + "-330.jpg 330w," +
                this.imgPath + "-270.jpg 270w," +
                this.imgPath + "-220.jpg 220w," +
                this.imgPath + "-165.jpg 165w,";
  this.sizes = "(min-width: 768px) 100vw, 100vw";
};

/* the viewmodel */

var ViewModel = function() {
  var self = this;
  /* set global visible variables */
  this.mainIsVisible = ko.observable(true);
  this.articleIsVisible = ko.observable(false);
  this.galleryIsVisible = ko.observable(false);
  this.aboutmeIsVisible = ko.observable(false);
  this.contactIsVisible = ko.observable(false);
  this.longArtMainIsVisible = ko.observable(false);

  this.artTitle = ko.observable("");
  this.artText = ko.observable("");
  this.artTextTwo = ko.observable("");
  this.artSrc = ko.observable("");
  this.artSrcset = ko.observable("");
  this.artSizes = ko.observable("");
  this.artAltText = ko.observable("");
  this.artCaptionText = ko.observable("");

  this.EPtitle1 = ko.observable("");
  this.EPtextCol1 = ko.observable("");
  this.EPimg1 = ko.observable("");
  this.EPaltText1 = ko.observable("");
  this.EPcaptionText1 = ko.observable("");
  this.EPimgPath1 = ko.observable("");
  this.EPsrc1 = ko.observable("");
  this.EPsrcset1 = ko.observable("");
  this.EPsizes1 = ko.observable("");

  this.EPtitle2 = ko.observable("");
  this.EPtextCol2 = ko.observable("");
  this.EPimg2 = ko.observable("");
  this.EPaltText2 = ko.observable("");
  this.EPcaptionText2 = ko.observable("");
  this.EPimgPath2 = ko.observable("");
  this.EPsrc2 = ko.observable("");
  this.EPsrcset2 = ko.observable("");
  this.EPsizes2 = ko.observable("");

  
  this.currentSeries = ko.observable("");

  /* create empty mainView, articleView array and galleryView array */
  this.mainViewRowOne = [];
  this.mainViewRowTwo = [];
  this.galleryView = ko.observableArray();

  /* populate mainView, a normal array that holds instances of Series */
  // the first foreach loops through that and builds html to show main view 

  initialSeries.forEach(function(series, index) {
    if (index < 4) {
      self.mainViewRowOne.push(new Series(series));
    } else {
      self.mainViewRowTwo.push(new Series(series));
    }
  });

  self.showArticle = function(series) {
    self.mainIsVisible(false);

    self.artTitle(series.artTitle);
    self.artText(series.artText);
    self.artTextTwo(series.artTextTwo);
    self.artSrc(series.artSrc);
    self.artSrcset(series.artSrcset);
    self.artSizes(series.artSizes);
    self.artAltText(series.artAltText);
    self.artCaptionText(series.artCaptionText);

    self.currentSeries(series.seriesName);

    self.articleIsVisible(true);
  };

  self.backToMain = function() {
    self.articleIsVisible(false);
    self.aboutmeIsVisible(false);
    self.galleryIsVisible(false);
    self.contactIsVisible(false);
    self.longArtMainIsVisible(false);
    self.mainIsVisible(true);
    self.currentSeries("");
  }; 

  self.showGallery = function() {
    self.galleryView.removeAll();
    initialSeries.forEach(function(series) {
      if (series.seriesName === self.currentSeries()) {
        series.images.forEach(function(image) {
          if (! /MAIN/.test(image.img)) {
            self.galleryView.push(new Image(image, series.seriesName));
          }
        });
      }
    });

    self.articleIsVisible(false);
    self.galleryIsVisible(true);
  };

  self.showAboutme = function() {
    self.mainIsVisible(false);
    self.articleIsVisible(false);
    self.galleryIsVisible(false);
    self.contactIsVisible(false);
    self.longArtMainIsVisible(false);

    extraPages.forEach(function(page) {
      if (page.pageName === "AboutMe") {
        self.EPtextCol1(page.textCol1);
        self.EPimg1(page.images[0].img)
        console.log(self.EPimg1());
        self.EPcaptionText1(page.images[0].captionText)
        self.EPaltText1(page.images[0].altText)

        self.EPimgPath1("images/extraPages/" + self.EPimg1());
    console.log(self.EPimgPath1());
        self.EPsrc1(self.EPimgPath1() + "-440.jpg");
        self.EPsrcset1(self.EPimgPath1() + "-440.jpg 440w," +
                         self.EPimgPath1() + "-330.jpg 330w," +
                         self.EPimgPath1() + "-270.jpg 270w," +
                         self.EPimgPath1() + "-220.jpg 220w," +
                         self.EPimgPath1() + "-165.jpg 165w");
        self.EPsizes1("(min-width: 768px) 40vw, 100vw");
      }
    });

    self.aboutmeIsVisible(true);
  }; 

  self.showContact = function() {
    self.mainIsVisible(false);
    self.articleIsVisible(false);
    self.galleryIsVisible(false);
    self.aboutmeIsVisible(false);
    self.longArtMainIsVisible(false);

    extraPages.forEach(function(page) {
      if (page.pageName === "Contact") {
        self.EPtextCol1(page.textCol1);
        self.EPimg1(page.images[0].img)
        self.EPcaptionText1(page.images[0].captionText)
        self.EPaltText1(page.images[0].altText)

        self.EPimgPath1("images/extraPages/" + self.EPimg1());
        self.EPsrc1(self.EPimgPath1() + "-440.jpg");
        self.EPsrcset1(self.EPimgPath1() + "-440.jpg 440w," +
                         self.EPimgPath1() + "-330.jpg 330w," +
                         self.EPimgPath1() + "-270.jpg 270w," +
                         self.EPimgPath1() + "-220.jpg 220w," +
                         self.EPimgPath1() + "-165.jpg 165w");
        self.EPsizes1("(min-width: 768px) 40vw, 100vw");
      }
    });

    self.contactIsVisible(true);
  }; 
    
  self.showLongArtMain = function() {
    self.mainIsVisible(false);
    self.articleIsVisible(false);
    self.galleryIsVisible(false);
    self.aboutmeIsVisible(false);

    extraPages.forEach(function(page) {
      if (page.pageName === "LongArtMain") {
        self.EPtitle1(page.title1);
        self.EPtextCol1(page.textCol1);
        self.EPimg1(page.images[0].img)
        self.EPcaptionText1(page.images[0].captionText)
        self.EPaltText1(page.images[0].altText)
        self.EPimgPath1("images/extraPages/" + self.EPimg1());
        self.EPsrc1(self.EPimgPath1() + "-440.jpg");
        self.EPsrcset1(self.EPimgPath1() + "-440.jpg 440w," +
                         self.EPimgPath1() + "-330.jpg 330w," +
                         self.EPimgPath1() + "-270.jpg 270w," +
                         self.EPimgPath1() + "-220.jpg 220w," +
                         self.EPimgPath1() + "-165.jpg 165w");
        self.EPsizes1("(min-width: 768px) 40vw, 100vw");

        self.EPtitle2(page.title2);
        self.EPtextCol2(page.textCol2);
        self.EPimg2(page.images[1].img)
        self.EPcaptionText2(page.images[1].captionText)
        self.EPaltText2(page.images[1].altText)
        self.EPimgPath2("images/extraPages/" + self.EPimg2());
        self.EPsrc2(self.EPimgPath2() + "-440.jpg");
        self.EPsrcset2(self.EPimgPath2() + "-440.jpg 440w," +
                         self.EPimgPath2() + "-330.jpg 330w," +
                         self.EPimgPath2() + "-270.jpg 270w," +
                         self.EPimgPath2() + "-220.jpg 220w," +
                         self.EPimgPath2() + "-165.jpg 165w");
        self.EPsizes2("(min-width: 768px) 40vw, 100vw");
      }
    });

    self.longArtMainIsVisible(true);
  }; 

};
ko.applyBindings(new ViewModel());
