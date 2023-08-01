const express = require('express')
const router = express.Router()
const { addToList } = require('../util/util.js')

router.post("/banners-1418/load-prototype-data", function(req, res) {
    req.session.data['welsh']= false;
    req.session.data['schedule']= false;
    req.session.data['banner'];
  req.session.data['banners']= [
      {
        "dateCreated":"29 Feb 2023",
        "title":"Registration and RR form available",
        "content": "The Registration and Relevant Representations form is available until 23:59 on Friday 24 February 2023.",
        "emailSubscribers": "Yes",
        "author": "Joe Bloggs",
        "status": "Draft",
        "bannerColourClass": "govuk-tag--turquoise",
        "type": "General"
      },
      {
        "dateCreated":"26 Jan 2023",
        "title":"Registration opened",
        "content": "You can now register as an Interested Party.",
        "emailSubscribers": "Yes",
        "author": "Joe Bloggs",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green",
        "type": "General"
      },
      {
        "dateCreated":"22 Dec 2022",
        "title":"Applicant submitted additional submissions",
        "content": "The Applicant has submitted some Additional Submissions. The ExA has issued a letter (PDF, 162 KB) accepting these documents.",
        "emailSubscribers": "Yes",
        "author": "Chris Smith",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green",
        "type": "General"
      },
      {
        "dateCreated":"19 Dec 2022",
        "title":"Examining Authority issued documents",
        "content": "The Examining Authority has today issued the following documents.",
        "emailSubscribers": "No",
        "author": "Joe Bloggs",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green",
        "type": "General"
      },
      {
        "dateCreated":"17 Nov 2022",
        "title":"Read the letter",
        "content": "The application has been accepted for examination.",
        "emailSubscribers": "Yes",
        "author": "Chris Smith",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green",
        "type": "General"
      },
      {
        "dateCreated":"15 Nov 2022",
        "title":"The application documents have been published.",
        "content": "The documents have been published to help you become familiar with the proposal. There is no opportunity to make comments on the application at this stage.",
        "emailSubscribers": "Yes",
        "author": "Joe Bloggs",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green",
        "type": "General"
      },
      {
        "dateCreated":"14 Nov 2022",
        "title":"This application was received",
        "content": "The applicant has agreed that all application documents can be published as soon as practicable to help everyone become familiar with the detail of what is being proposed in this application. The Planning Inspectorate will therefore make the application documents available as soon as practicable. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        "emailSubscribers": "Yes",
        "author": "Chris Smith",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green",
        "type": "General"
      },
      {
        "dateCreated":"12 Jul 2022",
        "title":"Registration and RR form available",
        "content": "The Registration and Relevant Representations form is available until 23:59 on Friday 24 February 2023.",
        "emailSubscribers": "Yes",
        "author": "Joe Bloggs",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green",
        "type": "General"
      },
      {
        "dateCreated":"11 Feb 2022",
        "title":"The application is expected to be re-submitted",
        "content": "The application is expected to be re-submitted to the Planning Inspectorate in Autumn 2022.",
        "emailSubscribers": "Yes",
        "author": "Joe Bloggs",
        "status": "Draft",
        "bannerColourClass": "govuk-tag--turquoise",
        "type": "General"
      },
      {
        "dateCreated":"10 Jan 2022",
        "title":"Application withdrawn",
        "content": "The application has been withdrawn. Please see the Applicant’s letter (PDF, 119KB).",
        "emailSubscribers": "Yes",
        "author": "Joe Bloggs",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green",
        "type": "General"
      }
    ]
    console.log (req.session.data['banners']);
      res.redirect("/banners-1418/");

  });

  router.post("/banners-1418/load-prototype-data-welsh", function(req, res) {

    req.session.data['welsh']= true;
    console.log(req.session.data['welsh']);
    req.session.data['banner'];
  req.session.data['banners']= [
      {
        "dateCreated":"24 Feb 2023",
        "title":"Registration and RR form available",
        "content": "The Registration and Relevant Representations form is available until 23:59 on Friday 24 February 2023.",
        "emailSubscribers": "Yes",
        "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
        "emailSubscribersWelsh":"Yes",
        "author": "Joe Bloggs",
        "status": "Draft",
        "bannerColourClass": "govuk-tag--turquoise"
      },
      {
        "dateCreated":"10 Jan 2023",
        "title":"Registration opened",
        "content": "You can now register as an Interested Party.",
        "emailSubscribers": "Yes",
        "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
        "emailSubscribersWelsh":"Yes",
        "author": "Joe Bloggs",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green"
      },
      {
        "dateCreated":"22 Dec 2022",
        "title":"Applicant submitted additional submissions",
        "content": "The Applicant has submitted some Additional Submissions. The ExA has issued a letter (PDF, 162 KB) accepting these documents.",
        "emailSubscribers": "Yes",
        "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
        "emailSubscribersWelsh":"Yes",
        "author": "Chris Smith",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green"
      },
      {
        "dateCreated":"19 Dec 2022",
        "title":"Examining Authority issued documents",
        "content": "The Examining Authority has today issued the following documents.",
        "emailSubscribers": "No",
        "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
        "emailSubscribersWelsh":"Yes",
        "author": "Joe Bloggs",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green"
      },
      {
        "dateCreated":"28 Nov 2022",
        "title":"Read the letter",
        "content": "The application has been accepted for examination.",
        "emailSubscribers": "Yes",
        "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
        "emailSubscribersWelsh":"Yes",
        "author": "Chris Smith",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green"
      },
      {
        "dateCreated":"11 Nov 2022",
        "title":"The application documents have been published.",
        "content": "The documents have been published to help you become familiar with the proposal. There is no opportunity to make comments on the application at this stage.",
        "emailSubscribers": "Yes",
        "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
        "emailSubscribersWelsh":"Yes",
        "author": "Joe Bloggs",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green"
      },
      {
        "dateCreated":"2 Nov 2022",
        "title":"This application was received",
        "content": "The applicant has agreed that all application documents can be published as soon as practicable to help everyone become familiar with the detail of what is being proposed in this application. The Planning Inspectorate will therefore make the application documents available as soon as practicable.",
        "emailSubscribers": "Yes",
        "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
        "emailSubscribersWelsh":"Yes",
        "author": "Chris Smith",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green"
      },
      {
        "dateCreated":"15 Jul 2022",
        "title":"Registration and RR form available",
        "content": "The Registration and Relevant Representations form is available until 23:59 on Friday 24 February 2023.",
        "emailSubscribers": "Yes",
        "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
        "emailSubscribersWelsh":"Yes",
        "author": "Joe Bloggs",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green"
      },
      {
        "dateCreated":"24 Feb 2023",
        "title":"The application is expected to be re-submitted",
        "content": "The application is expected to be re-submitted to the Planning Inspectorate in Autumn 2022.",
        "emailSubscribers": "Yes",
        "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
        "emailSubscribersWelsh":"Yes",
        "author": "Joe Bloggs",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green"
      },
      {
        "dateCreated":"20 Nov 2020",
        "title":"Application withdrawn",
        "content": "The application has been withdrawn. Please see the Applicant’s letter (PDF, 119KB).",
        "emailSubscribers": "Yes",
        "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
        "emailSubscribersWelsh":"Yes",
        "author": "Joe Bloggs",
        "status": "Published",
        "bannerColourClass": "govuk-tag--green"
      }
    ]
    console.log (req.session.data['banners']);
      res.redirect("/banners-1418/");

  });

  router.post("/banners-1418/change-banner-form-answer", function(req, res) {

    if( req.session.data['change-banner-position'] ){

    let choice = req.session.data['change-banner-position']
    console.log(choice)
    req.session.data['banner'] = req.session.data['banners'][choice];
    console.log(req.session.data['banner']);
    }


      res.redirect("/banners-1418/summary");


  });

  router.post("/banners-1418/create-journey-start", function(req, res) {

    if( req.session.data['welsh'] ){
      res.redirect("/banners-1418/create/welsh/index");


    }
  else {

  }    res.redirect("/banners-1418/create/index");




  });


  router.post("/banners-1418/change-content-routing", function(req, res) {
    //Colour logic and IP number

    req.session.data['changeSummary'] = 1;
    // CB added as a test
    var changedContent = req.session.data['allContent'] ;
    console.log(changedContent) ;
    req.session.data.banner['content'] = changedContent;


    res.redirect("summary");
//IP number

});


  router.post("/banners-1418/change-status-routing", function(req, res) {
    //Colour logic and IP number

    req.session.data['changeSummary'] = 1;

    if (req.session.data.banner['status'] == "Draft"){
      req.session.data.banner['bannerColourClass'] = "govuk-tag--turquoise";
    }

    else if (req.session.data.banner['status'] == "Published"){
      req.session.data.banner['bannerColourClass'] = "govuk-tag--green";
    }

    else {
      req.session.data.banner['bannerColourClass'] = "govuk-tag--red";
    }

        res.redirect("summary");
    //IP number

    });

    router.post("/banners-1418/set-status-routing", function(req, res) {
      //Colour logic and IP number
      if (req.session.data.banner['status'] == "Draft"){
        req.session.data.banner['bannerColourClass'] = "govuk-tag--turquoise";
      }

      else if (req.session.data.banner['status'] == "Published"){
        req.session.data.banner['bannerColourClass'] = "govuk-tag--green";
      }

      else if (req.session.data.banner['status'] == "Scheduled"){
        req.session.data.banner['bannerColourClass'] = "govuk-tag--blue";
        res.redirect("create/schedule");

      }

      else {
        req.session.data.banner['bannerColourClass'] = "govuk-tag--red";
      }

          res.redirect("create/check-answers");
      //IP number

      });

      router.post("/banners-1418/set-schedule-routing", function(req, res) {

        res.redirect("create/check-answers");
    //IP number

    });

    router.post("/banners-1418/summary-routing", function(req, res) {

      if(!req.session.data['banners']) {
      req.session.data['banners'] = []
      }

      req.session.data['changeSummary'] = 0;
      req.session.data['bannerAlert'] = true;

      // set corrections array as a variable
      let submissionData = req.session.data['banners']

      // access the set of sales details the user has just entered
      let choice = req.session.data['banner']


      // check if the user is changing some details already entered
      let change = req.session.data['change-banner-position']

      // call the function to add the latest correction to the corrections
      addToList(choice, submissionData, change)


              delete req.session.data['change-banner-position']


      console.log(req.session.data['banners'])
      res.redirect("index");

  });




  router.post("/banners-1418/check-answers-routing", function(req, res) {

    if(!req.session.data['banners']) {
    req.session.data['banners'] = []
    }

    const sessionData = req.session.data

    //Set banner date
    req.session.data.banner['dateCreated'] = "1 March 2023";
    req.session.data.banner['author'] = "Bob Bloggs";
    req.session.data['bannerAlert'] = true;

    // set corrections array as a variable
    let submissionData = req.session.data['banners']

    // access the set of sales details the user has just entered
    let choice = req.session.data['banner']


    // check if the user is changing some details already entered
    let change = req.session.data['change-banner-position']

    // call the function to add the latest correction to the corrections
    addToList(choice, submissionData, change)


            delete req.session.data['change-banner-position']


    console.log(req.session.data['banners'])
    res.redirect("/banners-1418/index");

  });

  router.post("/banners-1418/delete-routing", function(req, res) {


    req.session.data['changeSummary'] = 0;
    req.session.data['bannerAlert'] = true;
    req.session.data.banner['status'] = "Deleted";

    res.redirect("/banners-1418/index");

    });

  module.exports = router
