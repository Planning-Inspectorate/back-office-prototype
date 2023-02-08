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

  // PROJECT 0 USE A DEFAULT

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

    //EXAMINATION TIMETABLE items
    examtimetable: {
      "timetable-status": "",

      items: {
      // item0: {
      //   "item-name":"Procedural deadline 1",
      //   "item-type":"deadline",
      //   "item-start-time-hr":"12",
      //   "item-start-time-min":"00",
      //   "item-start-time-12":"am",
      //   "item-end-time-hr":"23",
      //   "item-end-time-min":"59",
      //   "item-end-time-12":"pm",
      //   "item-start-date-day":"13",
      //   "item-start-date-month":"07",
      //   "item-start-date-year":"2022",
      //   "item-end-date-day":"13",
      //   "item-end-date-month":"07",
      //   "item-end-date-year":"2023",
      //   "item-description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //   "status":"Not published",
      // },
    }

    },

    //DOCUMENT DEFAULTS
    documents: {

      //Examination/Deadline 1 folder - Checked docs
      doc0: {
        "doc-selected":"",
        "doc-name": "Professor Mike Alder - Landscape, Noise, Battery Safety",
        "doc-description": "Deadline 1 Submission - Landscape, Noise, Battery Safety",
        "doc-type": "TBC",
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
        "doc-case-stage": "",
        "doc-file-type": "PDF",
        "doc-file-size": "",
        "doc-webfilter": "Deadline 1",
        "doc-library-reference": "Not assigned",
        "doc-from":"Professor Mike Alder"
      },
      doc1: {
        "doc-selected":"",
        "doc-name": "Tracie Harvey",
        "doc-description": "Deadline 1 Submission - Applicant’s comments on Relevant Representations",
        "doc-type": "TBC",
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
        "doc-type": "TBC",
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
        "doc-type": "TBC",
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
        "doc-type": "TBC",
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
        "doc-type": "TBC",
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
        "doc-type": "TBC",
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
        "doc-type": "TBC",
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
    },

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
