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

  // Insert values here
  "default-view": "project01",

  // PROJECT 01 USE A DEFAULT
  project01:  {

    projectdetails: {
      "project-name": "project 01 - default",
      "project-case-number": "00000 000 000",
      "project-page-status": "Not provided",
      "project-stage": "Not provided",
      "project-description": "Not provided",
      "project-sector": "Not provided",
      "project-subsector": "Not provided",
      "project-email": "Not provided",
      "project-location": "Not provided",
      "project-grid": "Not provided",
      "project-grid-easting": "Not provided",
      "project-grid-northing": "Not provided",
      "project-region": "Not provided",
      "project-zoom": "Not provided"
  },

      // APPLICANT DEFAULTS
    applicantdetails: {
      "app-name": "Not provided",
      "app-contact": "Not provided",
      "app-address": "Not provided",
      "app-website": "Not provided",
      "app-email": "Not provided",
      "app-phone": "Not provided"
  },

    //DOCUMENT DEFAULTS
    documents: {
      d1: {
        "selected": "no",
        "doc-name": "Alan Jones",
        "doc-from":"Alan Jones",
        "doc-type": "PDF",
        "doc-size": "1.3GB",
        "doc-date-recieved": "11/22/22",
        "doc-redaction": "Unredacted",
        "doc-status": "Not Checked",
        "doc-details": "Edit Details"
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

  }


}
