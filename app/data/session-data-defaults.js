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
      "doc-name": "",
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

    //DOCUMENT DEFAULTS
    documents: [{
        "selected": "no",
        "doc-name": "Braintree District Council",
        "doc-description": "Deadline 4 Submission - Braintree District Council Comment in Relation to Submission made by the Applicant at Deadline 3",
        "doc-type": "Deadline Submission",
        "doc-location": "Examination > Deadline 4",
        "doc-date-recieved": "11/22/22",
        "doc-redaction": "Unredacted",
        "doc-status": "Not Checked",
        "doc-publishing": "10/10/10",
        "doc-case-reference": "TR020007",
        "doc-case-stage": "Examination",
        "doc-file-type": "PDF",
        "doc-file-size": "1.3GB",
        "doc-library-reference": "AAP - 004",
        "doc-from":"Braintree District Council"
      },
      {
        "selected": "no",
        "doc-name": "Chelmsford City Council",
        "doc-description": "Deadline 4 Submission - Cover Letter",
        "doc-type": "Deadline Submission",
        "doc-location": "Examination > Deadline ",
        "doc-date-recieved": "11/22/22",
        "doc-redaction": "Unredacted",
        "doc-status": "Not Checked",
        "doc-publishing": "10/10/10",
        "doc-case-reference": "TR020007",
        "doc-case-stage": "Examination",
        "doc-file-type": "PDF",
        "doc-file-size": "1.5GB",
        "doc-library-reference": "AAP - 005",
        "doc-from":"Chelmsford City Council"
      }],

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

  }


}
