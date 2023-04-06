/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/


module.exports = {

  // Globals
  "default-view": "project01",
  "projectNo":"project00",

  project00:  {

    projectdetails: {
      "project-name": "",
      "project-case-number": "",
      "project-page-status": "",
      "project-stage": "",
      "project-description": "",
      "project-sector": "",
      "project-subsector": "",
      "project-email": "",
      "project-location": "",
      "project-grid": "",
      "project-grid-easting": "",
      "project-grid-northing": "",
      "project-region": "",
      "project-zoom": ""
  },

      // APPLICANT DEFAULTS
    applicantdetails: {
      "app-name": "",
      "app-contact": "",
      "app-address": "",
      "app-website": "",
      "app-email": "",
      "app-phone": ""
  },
  // DOCUMENT DEFAULTS
  documents: [{
      "selected": "",
      "doc-name": "test",
      "doc-description": "",
      "doc-type": "",
      "doc-location": "",
      "doc-date-recieved": "",
      "doc-redaction": "",
      "doc-status": "",
      "doc-publishing": "",
      "doc-case-reference": "",
      "doc-case-stage": "",
      "doc-file-type": "",
      "doc-file-size": "",
      "doc-library-reference": "",
      "doc-from":""
    }]
},


  project01:  {

    publishedstatus: "Published",
    itemstatus: "",

    projectdetails: {
      "project-name": "Longfield Solar Farm",
      "project-case-number": "0CRV0097360",
      "project-page-status": "published",
      "project-stage": "Examination",
      "project-description": "A new solar photovoltaic array generating station, co-located with battery storage, together with grid connection infrastructure.",
      "project-sector": "Generating Stations",
      "project-subsector": "Solar",
      "project-email": "LongfieldSolarFarm@planninginspectorate.gov.uk",
      "project-location": "Located on land north east of Chelmsford and north of the A12 between Boreham and Hatfield Peverel",
      "project-grid": "938475",
      "project-grid-easting": "98743658",
      "project-grid-northing": "948375",
      "project-region": "South East",
      "project-zoom": "4"
  },

      // APPLICANT DEFAULTS
    applicantdetails: {
      "app-name": "Longfield Solar Energy Farm Limited",
      "app-contact": "James Pateman",
      "app-address": "Not provided",
      "app-website": "Not provided",
      "app-email": "LongfieldSolarFarm@planninginspectorate.gov.uk",
      "app-phone": "0800 0194 576"
  },


    //KEY DATES

  keydates: {

    publishedstatus: "Published",
    itemstatus: "",

    preapplication: {

      "first-notified-day": "16",
      "first-notified-month": "12",
      "first-notified-year": "2002",

      "published-day": "16",
      "published-month": "12",
      "published-year": "2002",

      "anticipated-submission-day": "16",
      "anticipated-submission-month": "12",
      "anticipated-submission-year": "2002",

      "anticipated-submission-published": "Q4 2023",

      "screening-sought-day": "16",
      "screening-sought-month": "12",
      "screening-sought-year": "2002",

      "screening-issued-day": "16",
      "screening-issued-month": "12",
      "screening-issued-year": "2002",

      "scoping-sought-day": "16",
      "scoping-sought-month": "12",
      "scoping-sought-year": "2002",

      "scoping-issued-day": "16",
      "scoping-issued-month": "12",
      "scoping-issued-year": "2002",

      "section46-day": "16",
      "section46-month": "12",
      "section46-year": "2002",

      "section55-day": "16",
      "section55-month": "12",
      "section55-year": "2002",
    },

    acceptance: {
      "deadline-decision-day": "",
      "deadline-decision-month": "",
      "deadline-decision-year": "",

      "acceptance-day": "",
      "acceptance-month": "",
      "acceptance-year": "",

      "non-acceptance-day": "",
      "non-acceptance-month": "",
      "non-acceptance-year": "",
    }

  },

    //EXAMINATION TIMETABLE items
    examtimetable: {
      "timetable-status": "Published",

      items: {
        item0: {
          "item-name":"Issue by the ExA of the Examination Timetable",
          "item-action": "Closed",
          "item-type":"Issue by",
          "item-start-date-day":"17",
          "item-start-date-month":"01",
          "item-start-date-year":"2023",
          "item-description":"Issue by the Examining Authority of: The Examination Timetable. Publication of: The Examining Authority’s written questions (ExQ1).",
        },
        item1: {
          "item-name":"Compulsory Acquisition Hearing 1 (CAH1)",
          "item-action": "Closed",
          "item-type":"Compulsory Acquisition Hearing",
          "item-start-date-day":"06",
          "item-start-date-month":"02",
          "item-start-date-year":"2023",
          "item-start-time-hr":"10",
          "item-start-time-min":"00",

        },
        item3: {
          "item-name":"1 For receipt by the Examining Authority of",
          "item-action": "Open",
          "item-type":"Deadline",
          "item-start-time-hr":"10",
          "item-start-time-min":"00",
          "item-end-time-hr":"23",
          "item-end-time-min":"59",
          "item-start-date-day":"02",
          "item-start-date-month":"02",
          "item-start-date-year":"2023",
          "item-end-date-day":"21",
          "item-end-date-month":"02",
          "item-end-date-year":"2023",
          "item-description":"• Post-hearing submissions, including written summaries of oral submissions to the hearings.Local Impact Reports from any local authorities.Summaries of Relevant Representations exceeding 1500 words.Comments on Relevant Representations.Comments on any Additional Submissions accepted at the discretion of the Examining Authority (see Annex B of this letter).Notification by Statutory Parties of their wish to be considered an Interested Party by the Examining Authority.Notification of wish to have future correspondence delivered electronically.Applicant’s draft itinerary for an Accompanied Site Inspection.Initial draft s106 Agreement(s) (if required).Initial Statements of Common Ground requested by the Examining Authority (see Annex B of this letter).Statement of Commonality for Statements of Common Ground. Thursday 2 February 2023 Applicant’s updated Application Guide in clean and tracked versions. Applicant’s updated Application Document Tracker in clean and tracked versions. Applicant’s updated Schedule of Negotiations and Powers Sought in clean and tracked versions. Applicant’s initial National Policy Statement tracker. Applicant’s updated Book of Reference (BoR) and Schedule of Changes to the BoR (if required) in clean and tracked versions. Any further information requested by the Examining Authority under Rule 17 of The Infrastructure",
        },
  
    }

    },

    //DOCUMENT DEFAULTS
    documents: {

      //Examination/Deadline 1 folder - Checked docs
      doc0: {
        "doc-selected":"",
        "doc-name": "Professor Mike Alder - Landscape, Noise, Battery Safety",
        "doc-description": "Deadline 1 Submission - Landscape, Noise, Battery Safety",
        "doc-type": " ",
        "doc-agent": "Professor Mike Alder",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "18",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Checked",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Examination",
        "doc-file-type": "PDF",
        "doc-file-size": "3kb",
        "doc-webfilter": "Deadline 1",
        "doc-library-reference": "Not assigned",
        "doc-from":"Professor Mike Alder"
      },
      doc1: {
        "doc-selected":"",
        "doc-name": "Tracie Harvey",
        "doc-description": "Deadline 1 Submission - Applicant’s comments on Relevant Representations",
        "doc-type": " ",
        "doc-agent": "Tracie Harvey",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "18",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Checked",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Examination",
        "doc-file-type": "PDF",
        "doc-file-size": "99KB",
        "doc-webfilter": "Deadline 1",
        "doc-library-reference": "Not assigned",
        "doc-from":"Tracie Harvey"
      },
      doc2: {
        "doc-selected":"",
        "doc-name": "Deadline 1A Submission - Cover Letter",
        "doc-description": "Deadline 1 Submission - Cover Letter",
        "doc-type": " ",
        "doc-agent": "The Planning Inspectorate",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "18",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Checked",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Examination",
        "doc-file-type": "PDF",
        "doc-file-size": "96KB",
        "doc-webfilter": "Deadline 1",
        "doc-library-reference": "Not assigned",
        "doc-from":"The Planning Inspectorate"
      },
      doc3: {
        "doc-selected":"",
        "doc-name": "Professor Mike Alder - Land Use, Agriculture and Social Economy",
        "doc-description": "Deadline 1A Submission - Land Use, Agriculture and Social Economy",
        "doc-type": " ",
        "doc-agent": "Professor Mike Alder",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "18",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Checked",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Examination",
        "doc-file-type": "PDF",
        "doc-file-size": "80KB",
        "doc-webfilter": "Deadline 1",
        "doc-library-reference": "Not assigned",
        "doc-from":"Professor Mike Alder"
      },

      //Examination/Deadline 1 folder - Unchecked docs
      doc4: {
        "doc-selected":"",
        "doc-name": "Applicant's Responses to Relevant Representations",
        "doc-description": "Deadline 1 Submission - Applicant's Responses to Relevant Representations",
        "doc-type": " ",
        "doc-agent": "",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Unchecked",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "",
        "doc-file-type": "",
        "doc-file-size": "",
        "doc-webfilter": "",
        "doc-library-reference": "Not assigned",
        "doc-from":""
      },
      doc5: {
        "doc-selected":"",
        "doc-name": "Request to be heard at an Open Floor Hearing",
        "doc-description": "Deadline 1 Submission - Request to be heard at an Open Floor Hearing and/or Compulsory Acquisition Hearing",
        "doc-type": " ",
        "doc-agent": "Pearsons LLP on behalf of Bio Solutions Limited ",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Unchecked",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Examination",
        "doc-file-type": "PDF",
        "doc-file-size": "80KB",
        "doc-webfilter": "Deadline 1",
        "doc-library-reference": "Not assigned",
        "doc-from":"Pearsons LLP on behalf of Bio Solutions Limited "
      },

      //Pre-examination / Procedural Decisions folder  - Ready to publish docs
      doc6: {
        "doc-selected":"",
        "doc-name": "Braintree District Council - Written submission",
        "doc-description": "Procedural Deadline A Submission - Written submissions on the Examination Procedure, including any submissions about the use of virtual methods",
        "doc-type": " ",
        "doc-agent": "Braintree District Council ",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Pre-examination",
        "doc-file-type": "PDF",
        "doc-file-size": "2KB",
        "doc-webfilter": "Procedural Deadline A",
        "doc-library-reference": "Not assigned",
        "doc-from":"Braintree District Council "
      },
      doc7: {
        "doc-selected":"",
        "doc-name": "Procedural Deadline A Submission by Longfield Solar Farm",
        "doc-description": "Procedural Deadline A Submission by Longfield Solar Farm",
        "doc-type": " ",
        "doc-agent": " ",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Pre-examination",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Procedural Deadline A",
        "doc-library-reference": "Not assigned",
        "doc-from": "Longfield Solar Farm"
      },
      doc8: {
        "doc-selected":"",
        "doc-name": "Braintree District Council - Written submission",
        "doc-description": "Procedural Deadline A Submission - Written submissions on the Examination Procedure, including any submissions about the use of virtual methods",
        "doc-type": " ",
        "doc-agent": "Braintree District Council",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Pre-examination",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Procedural Deadline A",
        "doc-library-reference": "Not assigned",
        "doc-from": "Braintree District Council "
      },
      doc9: {
        "doc-selected":"",
        "doc-name": "Longfield Solar Farm Limited",
        "doc-description": "Procedural Deadline A Submission - Written submissions on the Examination Procedure, including any submissions about the use of virtual methods",
        "doc-type": " ",
        "doc-agent": "Longfield Solar Farm",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Acceptance",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Environmental Statement",
        "doc-library-reference": "Not assigned",
        "doc-from": "Longfield Solar Farm"
      },
      doc10: {
        "doc-selected":"",
        "doc-name": "Longfield Solar Farm Limited",
        "doc-description": "6.2 Environmental Statement Appendix 16A: Stage 1 – Tier 1: Preliminary Risk Assessment PART 2 OF 10",
        "doc-type": " ",
        "doc-agent": "Longfield Solar Farm",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Acceptance",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Environmental Statement",
        "doc-library-reference": "Not assigned",
        "doc-from": "Longfield Solar Farm"
      },
      doc11: {
        "doc-selected":"",
        "doc-name": "Longfield Solar Farm Limited",
        "doc-description": "6.2 Environmental Statement Appendix 16A: Stage 1 – Tier 1: Preliminary Risk Assessment PART 3 OF 10",
        "doc-type": " ",
        "doc-agent": "Longfield Solar Farm",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Acceptance",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Environmental Statement",
        "doc-library-reference": "Not assigned",
        "doc-from": "Longfield Solar Farm"
      },
      doc12: {
        "doc-selected":"",
        "doc-name": "Longfield Solar Farm Limited",
        "doc-description": "6.2 Environmental Statement Appendix 16A: Stage 1 – Tier 1: Preliminary Risk Assessment PART 4 OF 10",
        "doc-type": " ",
        "doc-agent": "Longfield Solar Farm",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Acceptance",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Environmental Statement",
        "doc-library-reference": "Not assigned",
        "doc-from": "Longfield Solar Farm"
      },
      doc13: {
        "doc-selected":"",
        "doc-name": "Longfield Solar Farm Limited",
        "doc-description": "6.2 Environmental Statement Appendix 16A: Stage 1 – Tier 1: Preliminary Risk Assessment PART 5 OF 10",
        "doc-type": " ",
        "doc-agent": "Longfield Solar Farm",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Acceptance",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Environmental Statement",
        "doc-library-reference": "Not assigned",
        "doc-from": "Longfield Solar Farm"
      },
      doc13: {
        "doc-selected":"",
        "doc-name": "Longfield Solar Farm Limited",
        "doc-description": "6.2 Environmental Statement Appendix 16A: Stage 1 – Tier 1: Preliminary Risk Assessment PART 6 OF 10",
        "doc-type": " ",
        "doc-agent": "Longfield Solar Farm",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Acceptance",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Environmental Statement",
        "doc-library-reference": "Not assigned",
        "doc-from": "Longfield Solar Farm"
      },
      doc14: {
        "doc-selected":"",
        "doc-name": "Longfield Solar Farm Limited",
        "doc-description": "6.2 Environmental Statement Appendix 16A: Stage 1 – Tier 1: Preliminary Risk Assessment PART 7 OF 10",
        "doc-type": " ",
        "doc-agent": "Longfield Solar Farm",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Acceptance",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Environmental Statement",
        "doc-library-reference": "Not assigned",
        "doc-from": "Longfield Solar Farm"
      },
      doc15: {
        "doc-selected":"",
        "doc-name": "Longfield Solar Farm Limited",
        "doc-description": "6.2 Environmental Statement Appendix 16A: Stage 1 – Tier 1: Preliminary Risk Assessment PART 8 OF 10",
        "doc-type": " ",
        "doc-agent": "Longfield Solar Farm",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Acceptance",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Environmental Statement",
        "doc-library-reference": "Not assigned",
        "doc-from": "Longfield Solar Farm"
      },
      doc16: {
        "doc-selected":"",
        "doc-name": "Longfield Solar Farm Limited",
        "doc-description": "6.2 Environmental Statement Appendix 16A: Stage 1 – Tier 1: Preliminary Risk Assessment PART 9 OF 10",
        "doc-type": " ",
        "doc-agent": "Longfield Solar Farm",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Acceptance",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Environmental Statement",
        "doc-library-reference": "Not assigned",
        "doc-from": "Longfield Solar Farm"
      },
      doc17: {
        "doc-selected":"",
        "doc-name": "Longfield Solar Farm Limited",
        "doc-description": "6.2 Environmental Statement Appendix 16A: Stage 1 – Tier 1: Preliminary Risk Assessment PART 10 OF 10",
        "doc-type": " ",
        "doc-agent": "Longfield Solar Farm",
        //"doc-location": "Deadline 1",
        "doc-date-recieved-day": "29",
        "doc-date-recieved-month": "12",
        "doc-date-recieved-year": "2022",
        "doc-redaction": "Redacted",
        "doc-status": "Ready to publish",
        "doc-publishing-day": "04",
        "doc-publishing-month": "01",
        "doc-publishing-year": "2023",
        "doc-case-reference": "TR020007",
        "doc-reference-number": "TR020007 - 00787",
        "doc-case-stage": "Acceptance",
        "doc-file-type": "PDF",
        "doc-file-size": "50KB",
        "doc-webfilter": "Environmental Statement",
        "doc-library-reference": "Not assigned",
        "doc-from": "Longfield Solar Farm"


      },
    },

      s51: {
        doc1: {
          "doc-name": "Inception meeting",
          "doc-from": "Longfield Solar Farm",
          "doc-agent": "Longfield Solar Farm",
          "doc-recieved-date-day": "24",
          "doc-recieved-date-month": "11",
          "doc-recieved-date-year": "22",
          "doc-enquiry-method": "Phone",
          "doc-enquiry-date-day": "01",
          "doc-enquiry-date-month": "02",
          "doc-enquiry-date-year": "03",
          "doc-enquiry-details": "Enquiry following the issue of decision to accept the application for examination",
          "doc-advice-name": "Joe Bloggs",
          "doc-advice-details": "Here is some text",
          "doc-advice-date-day": "28",
          "doc-advice-date-month": "11",
          "doc-advice-date-year": "22",
          "doc-responded": "",
          "doc-status": "Published",
          "doc-redaction": "Redacted",
          "doc-published-date-day": "02",
          "doc-published-date-month": "02",
          "doc-published-date-year": "23",
          "doc-creation-date-day": "01",
          "doc-creation-date-month": "02",
          "doc-creation-date-year": "23",

          files: {
            
          },
        },
        doc2: {
          "doc-name": "Project update meeting and site visit",
          "doc-from": "",
          "doc-agent": "",
          "doc-recieved-date-day": "26",
          "doc-recieved-date-month": "01",
          "doc-recieved-date-year": "23",
          "doc-enquiry-method": "",
          "doc-enquiry-date-day": "26",
          "doc-enquiry-date-month": "01",
          "doc-enquiry-date-year": "23",
          "doc-enquiry-details": "",
          "doc-advice-name": "",
          "doc-advice-details": "",
          "doc-advice-date-day": "26",
          "doc-advice-date-month": "01",
          "doc-advice-date-year": "23",
          "doc-responded": "",
          "doc-status": "Not checked",
          "doc-redaction": "Unredacted",
          "doc-published-date-day": "01",
          "doc-published-date-month": "02",
          "doc-published-date-year": "03",
          "doc-creation-date-day": "01",
          "doc-creation-date-month": "02",
          "doc-creation-date-year": "23",

          files: {

          },
        },
        doc3: {
          "doc-name": "Draft application documents",
          "doc-from": "",
          "doc-agent": "",
          "doc-recieved-date-day": "26",
          "doc-recieved-date-month": "01",
          "doc-recieved-date-year": "23",
          "doc-enquiry-method": "",
          "doc-enquiry-date-day": "26",
          "doc-enquiry-date-month": "01",
          "doc-enquiry-date-year": "23",
          "doc-enquiry-details": "",
          "doc-advice-name": "",
          "doc-advice-details": "",
          "doc-advice-date-day": "26",
          "doc-advice-date-month": "01",
          "doc-advice-date-year": "23",
          "doc-responded": "",
          "doc-status": "Not checked",
          "doc-redaction": "Unredacted",
          "doc-published-date-day": "01",
          "doc-published-date-month": "02",
          "doc-published-date-year": "03",
          "doc-creation-date-day": "01",
          "doc-creation-date-month": "02",
          "doc-creation-date-year": "23",

          files: {

          },
        },
        doc4: {
          "doc-name": "Solar Farm committee",
          "doc-from": "",
          "doc-agent": "",
          "doc-recieved-date-day": "26",
          "doc-recieved-date-month": "01",
          "doc-recieved-date-year": "23",
          "doc-enquiry-method": "",
          "doc-enquiry-date-day": "26",
          "doc-enquiry-date-month": "01",
          "doc-enquiry-date-year": "23",
          "doc-enquiry-details": "",
          "doc-advice-name": "",
          "doc-advice-details": "",
          "doc-advice-date-day": "26",
          "doc-advice-date-month": "01",
          "doc-advice-date-year": "23",
          "doc-responded": "",
          "doc-status": "Not checked",
          "doc-redaction": "Unredacted",
          "doc-published-date-day": "01",
          "doc-published-date-month": "02",
          "doc-published-date-year": "03",
          "doc-creation-date-day": "01",
          "doc-creation-date-month": "02",
          "doc-creation-date-year": "23",

          files: {

          },
        }


      }

  },

  project02: {
    // PROJECT DEFAULTS
    projectdetails: {
      "project-name": "HyNet Carbon Dioxide Pipeline",
      "project-case-number": "00000 000 000",
      "project-page-status": "Not provided",
      "project-stage": "Acceptance",
      "project-description": "A new build carbon dioxide (CO2) pipeline that will transport CO2 produced and captured by future hydrogen producing facilities and existing industrial premises in North West England and North Wales for offshore storage. The CO2 pipeline will comprise both newbuild and existing pipelines that will be covered under the DCO. When complete it will run from the Ince AGI in Cheshire to Talacre Beach in North Wales.",
      "project-sector": "Not provided",
      "project-subsector": "Not provided",
      "project-email": "Not provided",
      "project-location": "From the Ince AGI in Cheshire, via Stanlow Refinery, to Talacre Beach in North Wales",
      "project-grid": "Not provided",
      "project-grid-easting": "123456",
      "project-grid-northing": "456789",
      "project-region": "Chesire",
      "project-zoom": "Not provided"
    },

      // APPLICANT DEFAULTS
    applicantdetails: {
      "app-name": "Liverpool Bay CCS Limited",
      "app-contact": "Not provided",
      "app-address": "Not provided",
      "app-website": "Not provided",
      "app-email": "hynetco2pipeline@planninginspectorate.gov.uk",
      "app-phone": "0203 1165919"
    },

    //DOCUMENT DEFAULTS
    documents: {

    }

  },

  project03: {

    projectdetails: {
      // PROJECT DEFAULTS
      "project-name": "A12 Chelmsford to A120 Widening Scheme",
      "project-case-number": "1234 000 000",
      "project-page-status": "Not provided",
      "project-stage": "Examination",
      "project-description": "The Applicant has informed the Planning Inspectorate that some persons with a legal interest in the land affected by the Proposed Development were not notified of the accepted application. The Applicant notified the omitted persons on 25 October 2022, and provided further time for them to register and comment on the scheme. Anyone who has received the Applicant’s notification and would like to make register and comment on the scheme should do so by 28 November 2022.",
      "project-sector": "Transport",
      "project-subsector": "Highways",
      "project-email": "A12ChelmsfordtoA120@planninginspectorate.gov.uk",
      "project-location": "From Junction 19 of the A12 to the East of Chelmsford to Junction 25 with the A120 at Marks Tey",
      "project-grid": "Not provided",
      "project-grid-easting": "123456",
      "project-grid-northing": "456789",
      "project-region": "Marks Tey",
      "project-zoom": "Not provided"
    },

    // APPLICANT DEFAULTS
    applicantdetails: {
      "app-name": "Not provided",
      "app-contact": "Not provided",
      "app-address": "Not provided",
      "app-website": "Not provided",
      "app-email": "A12chelmsfordA120@planninginspectorate.gov.uk",
      "app-phone": "0300 123 5000"
    },

    //DOCUMENT DEFAULTS
    documents: {

    }

  },

  project04: {

    projectdetails: {
      // PROJECT DEFAULTS
      "project-name": "project 04",
      "project-case-number": "00000 000 000",
      "project-page-status": "Not provided",
      "project-stage": "Withdrawn",
      "project-description": "A new build carbon dioxide (CO2) pipeline that will transport CO2 produced and captured by future hydrogen producing facilities and existing industrial premises in North West England and North Wales for offshore storage. The CO2 pipeline will comprise both newbuild and existing pipelines that will be covered under the DCO. When complete it will run from the Ince AGI in Cheshire to Talacre Beach in North Wales.",
      "project-sector": "Not provided",
      "project-subsector": "Not provided",
      "project-email": "Not provided",
      "project-location": "From the Ince AGI in Cheshire, via Stanlow Refinery, to Talacre Beach in North Wales",
      "project-grid": "Not provided",
      "project-grid-easting": "123456",
      "project-grid-northing": "456789",
      "project-region": "Chesire",
      "project-zoom": "Not provided"
    },

      // APPLICANT DEFAULTS
    applicantdetails: {
      "app-name": "Liverpool Bay CCS Limited",
      "app-contact": "Not provided",
      "app-address": "Not provided",
      "app-website": "Not provided",
      "app-email": "hynetco2pipeline@planninginspectorate.gov.uk",
      "app-phone": "0203 1165919"
    },

    //DOCUMENT DEFAULTS
    documents: {

    }

  },
  project05: {

    projectdetails: {
      // PROJECT DEFAULTS
      "project-name": "Drax Bioenergy with Carbon Capture and Storage Project",
      "project-case-number": "EN010120",
      "project-page-status": "Not provided",
      "project-stage": "Pre-Examination",
      "project-description": "A new build carbon dioxide (CO2) pipeline that will transport CO2 produced and captured by future hydrogen producing facilities and existing industrial premises in North West England and North Wales for offshore storage. The CO2 pipeline will comprise both newbuild and existing pipelines that will be covered under the DCO. When complete it will run from the Ince AGI in Cheshire to Talacre Beach in North Wales.",
      "project-sector": "Energy",
      "project-subsector": "Generating station",
      "project-email": "Not provided",
      "project-location": "From the Ince AGI in Cheshire, via Stanlow Refinery, to Talacre Beach in North Wales",
      "project-grid": "Not provided",
      "project-grid-easting": "123456",
      "project-grid-northing": "456789",
      "project-region": "Chesire",
      "project-zoom": "Not provided"
    },

      // APPLICANT DEFAULTS
    applicantdetails: {
      "app-name": "Liverpool Bay CCS Limited",
      "app-contact": "Not provided",
      "app-address": "Not provided",
      "app-website": "Not provided",
      "app-email": "hynetco2pipeline@planninginspectorate.gov.uk",
      "app-phone": "0203 1165919"
    },

    //DOCUMENT DEFAULTS
    documents: {

    }

  }


}
