'use strict';

var initialSeries = [
  {
    seriesName: "skate",
    mainImgIdx: 1,
    artImgIdx: 2,
    artTitle: "SKATING",
    artText: "<p>Text</p><p>TEXT</p>",
    images: [
      {
        img: "skate_0",
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
      }
    ]
  },
  {
    seriesName: "westoak",
    mainImgIdx: 0,
    artImgIdx: 1,
    artTitle: "WEST OAKLAND",
    artText: "<p>Text</p><p>TEXT</p>",
    images: [
      {
        img: "westoak_0",
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
      }
    ]
  },
  {
    seriesName: "homeless",
    mainImgIdx: 2,
    artImgIdx: 1,
    artTitle: "AMONG THE HOMELESS",
    artText: "<p>Text</p><p>TEXT</p>",
    images: [
      {
        img: "homeless_0",
        captionText: "People in Oaktown",
        altText: "People in street"
      },
      {
        img: "homeless_1",
        captionText: "His name is Al",
        altText: "Man in car"
      },
      {
        img: "homeless_2",
        captionText: "To the store",
        altText: "People in store"
      }
    ]
  },
  {
    seriesName: "rust",
    mainImgIdx: 0,
    artImgIdx: 1,
    artTitle: "RUST AMONG US",
    artText: "<p>Text</p><p>TEXT</p>",
    images: [
      {
        img: "rust_0",
        captionText: "People in Oaktown",
        altText: "People in street"
      },
      {
        img: "rust_1",
        captionText: "His name is Al",
        altText: "Man in car"
      },
      {
        img: "rust_2",
        captionText: "To the store",
        altText: "People in store"
      }
    ]
  },
  {
    seriesName: "road",
    mainImgIdx: 1,
    artImgIdx: 2,
    artTitle: "ON THE ROAD",
    artText: "<p>Text</p><p>TEXT</p>",
    images: [
      {
        img: "road_0",
        captionText: "People in Oaktown",
        altText: "People in street"
      },
      {
        img: "road_1",
        captionText: "His name is Al",
        altText: "Man in car"
      },
      {
        img: "road_2",
        captionText: "To the store",
        altText: "People in store"
      }
    ]
  },
  {
    seriesName: "easter",
    mainImgIdx: 0,
    artImgIdx: 1,
    artTitle: "AT THE CHURCH",
    artText: "<p>Text</p><p>TEXT</p>",
    images: [
      {
        img: "easter_0",
        captionText: "People in Oaktown",
        altText: "People in street"
      },
      {
        img: "easter_1",
        captionText: "His name is Al",
        altText: "Man in car"
      },
      {
        img: "easter_2",
        captionText: "To the store",
        altText: "People in store"
      }
    ]
  },
  {
    seriesName: "kano",
    mainImgIdx: 1,
    artImgIdx: 0,
    artTitle: "IN KANO",
    artText: "<p>Text</p><p>TEXT</p>",
    images: [
      {
        img: "kano_0",
        captionText: "People in Oaktown",
        altText: "People in street"
      },
      {
        img: "kano_1",
        captionText: "His name is Al",
        altText: "Man in car"
      },
      {
        img: "kano_2",
        captionText: "To the store",
        altText: "People in store"
      }
    ]
  },
  {
    seriesName: "grainmkt",
    mainImgIdx: 2,
    artImgIdx: 1,
    artTitle: "AT THE GRAIN MARKET",
    artText: "<p>Text</p><p>TEXT</p>",
    images: [
      {
        img: "grainmkt_0",
        captionText: "People in Oaktown",
        altText: "People in street"
      },
      {
        img: "grainmkt_1",
        captionText: "His name is Al",
        altText: "Man in car"
      },
      {
        img: "grainmkt_2",
        captionText: "To the store",
        altText: "People in store"
      }
    ]
  },
];

var Series = function(data) {
  this.seriesName = data.seriesName;

  this.mainImg = data.images[data.mainImgIdx].img;
  this.mainCaptionText = data.images[data.mainImgIdx].captionText;
  this.mainAltText = data.images[data.mainImgIdx].altText;

  this.artImg = data.images[data.artImgIdx].img;
  this.artCaptionText = data.images[data.artImgIdx].captionText;
  this.artAltText = data.images[data.artImgIdx].altText;
  this.artTitle = data.artTitle;
  this.artText = data.artText;

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

// Gallery constructor.
// Given series name, finds right element in array. 
// Loops through images array, building variables.

/* the viewmodel */

var ViewModel = function() {
  var self = this;
  /* set global visible variables */
  this.mainIsVisible = ko.observable(true);
  this.articleIsVisible = ko.observable(false);
  this.galleryIsVisible = ko.observable(false);
  this.artTitle = ko.observable("");
  this.artText = ko.observable("");
  this.artSrc = ko.observable("");
  this.artSrcset = ko.observable("");
  this.artSizes = ko.observable("");
  this.artAltText = ko.observable("");
  this.artCaptionText = ko.observable("");

  /* create empty mainView, articleView array and galleryView array */
  this.mainViewRowOne = [];
  this.mainViewRowTwo = [];
  this.articleView = {};
  this.galleryView = [];

  /* populate mainView, a normal array that holds instances of Series */
  // the first foreach loops through that and builds html to show main view 

  initialSeries.forEach(function(series, index) {
    if (index < 4) {
      self.mainViewRowOne.push(new Series(series))
    } else {
      self.mainViewRowTwo.push(new Series(series))
    }
  });

  self.showArticle = function(series) {
    self.mainIsVisible(false);

    self.artTitle(series.artTitle);
    self.artText(series.artText);
    self.artSrc(series.artSrc);
    self.artSrcset(series.artSrcset);
    self.artSizes(series.artSizes);
    self.artAltText(series.artAltText);
    self.artCaptionText(series.artCaptionText);

    self.articleIsVisible(true);
  };

};
ko.applyBindings(new ViewModel());
