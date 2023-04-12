const express = require('express')
const router = express.Router()

const app = express() // the main app
const admin = express() // the sub app


// Import routes for new versioning system
router.use("/:folder/v:version", (req, res, next) => {
  try {
    return require(`./views/${req.params.folder}/v${req.params.version}/_routes`)(req, res, next)
  } catch (e) {
    next()
  }
})

require('./routes/relevant-reps-v2.js')(router);

// Add your routes here - above the module.exports line
//  I don't know Express, sorry for the hacks.

//Store project IDs so pages can be populated with project information dynamically, also stores Base(sprint) folder to allow previous iterations not to break


//reminder to return once pages are update to remove passed variable
router.get('/', function(req, res) {
  res.render("index.html");
});



//default project and doc are set in _layout.html, this will overwrite if present in url
router.all(/design-sprint/, function(req, res) {
  var projectNo = req.query.project;
  var docNo = req.query.document;
  var itemNo = req.query.item;
  var fileNo = req.query.file;
  var status;
  var redaction;

  var url = req.path;
  var sprint = url.split( '/' )[1];
  var url2 = url.replace(/(?:.*?\/){2}/, '');

  if (url2.split( '/' )[1] == "incomplete") {
    res.render("incomplete")
  }

  if (url2 == "project-documentation/status") {
    status = req.body.status;
    redaction = req.body.redaction;

    docStatus (projectNo, docNo, status, redaction, req)
    res.render(sprint + "/project-documentation/index", { projectNo: projectNo })
  }

  if (url2 == "project-documentation/s51/status") {
    status = req.body.status;
    redaction = req.body.redaction;

    docS51Status (projectNo, docNo, status, redaction, req)
    res.render(sprint + "/project-documentation/s51/index", { projectNo: projectNo })
  }

  if (url2 == "project-documentation/publish/status") {
    status = "Published";
    docStatus (projectNo, docNo, status, redaction, req)
    res.render(sprint + "/project-documentation/publish/submit", { projectNo: projectNo, docNo: docNo })
  }

  if (url2 == "project-documentation/s51/publish/status") {
    status = "Published";
    docS51Status (projectNo, docNo, status, redaction, req)
    res.render(sprint + "/project-documentation/s51/publish/submit", { projectNo: projectNo, docNo: docNo })
  }

  if (url2 == "project-documentation/depublish/status") {
    status = "Unpublished";
    docStatus (projectNo, docNo, status, redaction, req)
    res.render(sprint + "/project-documentation/depublish/submit", { projectNo: projectNo, docNo: docNo })
  }

  if (url2 == "project-documentation/delete/status") {
    req.session.data[projectNo].documents[docNo]['doc-webfilter'] = "Hidden"
    res.render(sprint + "/project-documentation/delete/submit", { projectNo: projectNo, docNo: docNo })
  }

  if (url2 == "project-documentation/move/status") {
    req.session.data[projectNo].documents[docNo]['doc-webfilter'] = "Deadline 2"
    res.render(sprint + "/project-documentation/move/submit", { projectNo: projectNo, docNo: docNo })
  }


  //tiny hack to capture exam timetable item pages that haven't been built yet
  if (url2 == "project-timetable/new-item/item-procedural-deadline.html") {
    res.render(sprint + "/project-timetable/new-item/item-error.html", { projectNo: projectNo, itemNo: itemNo })
  }


  else {

    if (docNo) {
      //Qw hack for selected docs for now
      var docString = "";
      for (var i = 0; i < docNo.length; i++) {
        docString += "&document[]="+docNo[i];
      }

    }

    if (itemNo) {
      //Qw hack for selected items for now
      var itemString = "";
      for (var i = 0; i < itemNo.length; i++) {
        itemString += "&item[]="+itemNo[i];
      }

    }

    req.session.data.projectNo = projectNo
    req.session.data.docNo = docNo
    req.session.data.itemNo = itemNo
    req.session.data.docString = docString
    req.session.data.itemString = itemString
    req.session.data.fileNo = fileNo

    res.render(sprint + '/' + url2 , { projectNo: projectNo, docNo: docNo, itemNo: itemNo, docString: docString, fileNo: fileNo})
  }
});


function docStatus (projectNo, docNo, status, redaction, req){
   for (var i = 0; i < docNo.length; i++) {

     if (status) {
      req.session.data[projectNo].documents[docNo[i]]['doc-status'] = status
     }
     if (redaction) {
      req.session.data[projectNo].documents[docNo[i]]['doc-redaction'] = redaction
     }
    }
}

function docS51Status (projectNo, docNo, status, redaction, req){
   for (var i = 0; i < docNo.length; i++) {

     if (status) {
      req.session.data[projectNo].s51[docNo[i]]['doc-status'] = status
     }
     if (redaction) {
      req.session.data[projectNo].s51[docNo[i]]['doc-redaction'] = redaction
     }
    }
}


//remove session data
router.get("/reset", function (req, res) {
  req.session.destroy(function(err) {
      res.redirect("/");
  });
});



function addToList(obj, itemList, change){
  if(!itemList){
    itemList = []; // if no array exists create one
  }
  // Is the user changing an option?
  if(change) {
    // yes - find object to change and overwrite
    itemList.splice(change, 1, obj);
  } else {
    // no - add new object
    itemList.push(obj);
  }
  return itemList; // return edited array
}






//Keep this for Sprint0 examples for now

router.get('design-sprint-0/project-overview/index/project02', function (req, res) {


  res.render('design-sprint-0/project-overview/index', { projectNo: 'project02' })
})

router.get('/design-sprint-0/project-overview/index/project03', function (req, res) {

  res.render('design-sprint-0/project-overview/index', { projectNo: 'project03' })
})

router.get('/design-sprint-0/project-overview/index/project03', function (req, res) {

  res.render('design-sprint-0/project-overview/index', { projectNo: 'project04' })
})

router.get('/design-sprint-0/project-overview/index', function (req, res) {

  res.render('design-sprint-0/project-overview/index', { projectNo: 'project01' })
})


router.post("/relevant-reps-v1/load-prototype-data", function(req, res) {
  req.session.data['representation'];
req.session.data['interestedParties']= [
    {
      "ipNumber":"365411",
      "duplicate":false,
      "status": "Awaiting review",
      "representationColourClass": "govuk-tag--grey",
      "organisationName": "Joe Bloggs Inc",
      "firstName": "Joe",
      "lastName": "Bloggs",
      "jobTitle": "Lawyer",
      "telNumber": "0113 232 999",
      "emailAddress":"joe.bloggs@joebloggsinc.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"No",
      "representationOnBehalfOf":"Myself",
      "representationDateReceived":"2 Sept 2022",

      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"365412",
        "duplicate":false,
      "status": "Referred",
      "representationColourClass": "govuk-tag--blue",
      "organisationName": "Sally Wright Clinic",
      "firstName": "Sally",
      "lastName": "Wright",
      "jobTitle": "Computer Scientist",
      "telNumber": "0113 232 999",
      "emailAddress":"s.wright@sallywrightclinic.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"No",
      "representationOnBehalfOf":"Myself",
      "representationDateReceived":"2 Sept 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
        "ipNumber":"3654123",
          "duplicate":false,
      "status": "Valid",
      "organisationName": "",
      "firstName": "Peter",
      "lastName": "Biggins",
      "jobTitle": "Plumber",
      "telNumber": "0113 232 999",
      "emailAddress":"peter.biggins@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"Yes",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"1 Sept 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel.",
      "representationRedacted": "Redacted representation",
      "redactionNotes": "Removed reference to individual's health",
      "redactedBy":"Sarah Smith"
    },
    {
      "ipNumber":"3654124",
        "duplicate":true,
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "firstName": "Mike",
      "lastName": "Smith",
      "jobTitle": "Teacher",
      "telNumber": "0113 232 999",
      "emailAddress":"mike.smith@aol.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"No",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"3654125",
        "duplicate":false,
      "status": "Published",
      "organisationName": "",
      "firstName": "Jennie",
      "lastName": "Long",
      "jobTitle": "Administrator",
      "telNumber": "0113 232 999",
      "emailAddress":"jennie.long@yahoo.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"Yes",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 Aug 2022",
        "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel.",
        "representationRedacted": "Redacted representation",
        "redactionNotes": "Removed reference to individual's health",
        "redactedBy":"Sarah Smith"
    },
    {
      "ipNumber":"3654126",
        "duplicate":false,
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "firstName": "Paul",
      "lastName": "Anderson",
      "jobTitle": "Civil servant",
      "telNumber": "0113 232 999",
      "emailAddress":"p.anderson@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"No",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"26 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"3654127",
        "duplicate":false,
      "status": "Valid",
      "organisationName": "",
      "firstName": "Annie",
      "lastName": "Pearson",
      "jobTitle": "Cleaner",
      "telNumber": "0113 232 999",
      "emailAddress":"annie.pearson@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"Yes",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"25 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"3654128",
        "duplicate":false,
      "status": "Invalid",
        "representationColourClass": "govuk-tag--blue",
      "organisationName": "",
      "firstName": "James",
      "lastName": "Shuck",
      "jobTitle": "Surveyor",
      "telNumber": "0113 232 999",
      "emailAddress":"j.schuck@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
        "redacted":"No",
        "representationDateReceived":"23 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"3654219",
        "duplicate":false,
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "firstName": "Helen",
      "lastName": "Norris",
      "jobTitle": "Police officer",
      "telNumber": "0113 232 999",
        "over18": "Yes",
      "emailAddress":"h.norris@hnorris.org",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
      "OnBehalfOrganisationName": "Black Consulting",
      "onBehalfFirstName": "James",
      "onBehalfLastName": "Black",
      "onBehalfJobTitle": "Consulting agent",
      "onBehalfTelNumber": "01482 112 3222",
      "onBehalfEmailAddress":"j.black@consulting.org",
      "onBehalfAddressLine1": "Fancy House",
      "onBehalfAddressLine2" : "",
      "onBehalfTownOrCity": "London",
      "onBehalfCounty": "",
      "OnBehalfPostcode": "SE1 ABC",
      "OnBehalfPreferredContact": "Post",
      "onBehalfType" : "Members of the public/businesses",
      "onBehalfOver18": "Yes",
        "redacted":"No",
      "representationOnBehalfOf":"A representative on behalf of another person, family group or organisation",
        "representationDateReceived":"27 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"36542120",
        "duplicate":false,
      "status": "Valid",

      "organisationName": "",
      "firstName": "Zoe",
      "lastName": "Geddes",
      "jobTitle": "Lawyer",
      "telNumber": "0113 232 999",
      "emailAddress":"z.geddes@test.com",
  "over18": "Yes",
        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC",

      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
        "redacted":"Yes",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    }
  ]

    res.redirect("/relevant-reps-v1/");

});


router.get('/relevant-reps-v1', function (req, res) {
  res.render('relevant-reps-v1/index', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/index', function (req, res) {
  res.render('relevant-reps-v1/index', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/add/contact', function (req, res) {
  res.render('relevant-reps-v1/add/contact', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/add/address', function (req, res) {
  res.render('relevant-reps-v1/add/address', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/add/preferred-contact', function (req, res) {
  res.render('relevant-reps-v1/add/preferred-contact', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/audit/index', function (req, res) {
  res.render('relevant-reps-v1/audit/index', { projectNo: 'project05' })
})


router.get('/relevant-reps-v1/invalid/index', function (req, res) {
  res.render('relevant-reps-v1/invalid/index', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/referred/index', function (req, res) {
  res.render('relevant-reps-v1/referred/index', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/status', function (req, res) {
  res.render('relevant-reps-v1/status', { projectNo: 'project05' })
})


router.get('/relevant-reps-v1/add/representation', function (req, res) {
  res.render('relevant-reps-v1/add/representation', { projectNo: 'project05' })
})


router.get('/relevant-reps-v1/add/representee', function (req, res) {
  res.render('relevant-reps-v1/add/representee', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/add/attachments', function (req, res) {
  res.render('relevant-reps-v1/add/attachments', { projectNo: 'project05' })
})


router.get('/relevant-reps-v1/add/type', function (req, res) {
  res.render('relevant-reps-v1/add/type', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/add/over18', function (req, res) {
  res.render('relevant-reps-v1/add/over18', { projectNo: 'project05' })
})


router.get('/relevant-reps-v1/summary', function (req, res) {
  res.render('relevant-reps-v1/summary', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/add/check-answers', function (req, res) {
  res.render('relevant-reps-v1/add/check-answers', { projectNo: 'project05' })
})


router.get('/relevant-reps-v1/add/confirmation', function (req, res) {
  res.render('relevant-reps-v1/add/confirmation', { projectNo: 'project05' })
})


router.get('/relevant-reps-v1/redact', function (req, res) {
  res.render('relevant-reps-v1/redact', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/edit/address', function (req, res) {
  res.render('relevant-reps-v1/edit/address', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/edit/attachments', function (req, res) {
  res.render('relevant-reps-v1/edit/attachments', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/edit/contact', function (req, res) {
  res.render('relevant-reps-v1/edit/contact', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/edit/over18', function (req, res) {
  res.render('relevant-reps-v1/edit/over18', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/redaction', function (req, res) {
  res.render('relevant-reps-v1/redaction', { projectNo: 'project05' })
})

// router.get('/relevant-reps-v1/inspector-view/add', function (req, res) {
//   res.render('relevant-reps-v1/inspector-view/add', { projectNo: 'project05' })
// })



router.get('/relevant-reps-v1/edit/preferred-contact', function (req, res) {
  res.render('relevant-reps-v1/edit/preferred-contact', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/edit/representation', function (req, res) {
  res.render('relevant-reps-v1/edit/representee', { projectNo: 'project05' })
})

router.post("/relevant-reps-v1/check-answers-routing", function(req, res) {
    //Add default Values
    req.session.data.representation['status']="Awaiting review";
    req.session.data.representation['representationColourClass']= "govuk-tag--grey";
    req.session.data.representation['representationDateReceived'] = "1 August 2022";
    // if an array to store all the sets of correction values doesn't exist create it
    if(!req.session.data['interestedParties']) {
    req.session.data['interestedParties'] = []
    }

    // set corrections array as a variable
    let submissionData = req.session.data['interestedParties']

    // access the set of sales details the user has just entered
    let choice = req.session.data['representation']


    // check if the user is changing some details already entered
    let change = req.session.data['change-representation-position']

    // call the function to add the latest correction to the corrections
    addToList(choice, submissionData, change)


            delete req.session.data['change-representation-position']


    console.log(req.session.data['interestedParties'])
    res.redirect("add/confirmation");

});

router.post("/relevant-reps-v1/summary-routing", function(req, res) {

    if(!req.session.data['interestedParties']) {
    req.session.data['interestedParties'] = []
    }

    // set corrections array as a variable
    let submissionData = req.session.data['interestedParties']

    // access the set of sales details the user has just entered
    let choice = req.session.data['representation']


    // check if the user is changing some details already entered
    let change = req.session.data['change-representation-position']

    // call the function to add the latest correction to the corrections
    addToList(choice, submissionData, change)


            delete req.session.data['change-representation-position']


    console.log(req.session.data['interestedParties'])
    res.redirect("index?project=project05");

});


router.post("/relevant-reps-v1/change-status-routing", function(req, res) {
//Colour logic and IP number
if (req.session.data.representation['status'] == "Awaiting review"){
  req.session.data.representation['ipNumber']="";
  req.session.data.representation['representationColourClass'] = "govuk-tag--grey";
}

else if (req.session.data.representation['status'] == "Referred"){
    req.session.data.representation['ipNumber']="";
  req.session.data.representation['representationColourClass'] = "govuk-tag--blue";
    res.redirect("referred/index");
}

else if (req.session.data.representation['status'] == "Invalid"){
    req.session.data.representation['ipNumber']="";
  req.session.data.representation['representationColourClass'] = "govuk-tag--blue";
    res.redirect("invalid/index");
}

else {
  req.session.data.representation['representationColourClass'] = "";
    req.session.data.representation['ipNumber']="3654124";
}
    res.redirect("summary");
//IP number

});


router.post("/relevant-reps-v1/change-representation-form-answer", function(req, res) {

  if( req.session.data['change-representation-position'] ){

  let choice = req.session.data['change-representation-position']
  console.log(choice)
  req.session.data['representation'] = req.session.data['interestedParties'][choice];
  console.log(req.session.data['representation']);
  }


    res.redirect("/relevant-reps-v1/summary");


});

router.post("/redact-routing", function(req, res) {

  req.session.data.representation['redacted']="Yes";

// Updated upstream
console.log(req.session.data.representation['redacted'])
console.log("This is running");
    res.redirect("/relevant-reps-v1/summary");

console.log(req.session.data['redacted'])
    res.redirect("/relevant-reps-v1/add");


});


router.post("/relevant-reps-v1/inspector-view/add-routing", function(req, res) {

    if(!req.session.data['interestedPartiesView']) {
    req.session.data['interestedPartiesView'] = []
    }


    console.log("CB Start" + req.session.data['btnSave']) ;


    // set corrections array as a variable
    let submissionData = req.session.data['interestedPartiesView']
  //    console.log("interestedParties = ") ;
//    console.log(submissionData) ;
    // access the set of sales details the user has just entered
    let choice = req.session.data['representationView']
  //  console.log("choice = ") ;
  //  console.log(choice) ;
    // check if the user is changing some details already entered
    let change = req.session.data['change-representation-position']
    console.log("change = ") ;
// console.log(change) ;
    // call the function to add the latest correction to the corrections
    addToList(choice, submissionData, change)
//    console.log(req.session.data['change-representation-position'])

if (choice.readMe == ""){
// }
// else {
 console.log ("Tis correct") ;
  choice.readMe = "Yes" ;
  req.session.data['myReadCount'] = req.session.data['myReadCount'] + 1 ;
  req.session.data['myUnreadCount'] = req.session.data['myUnreadCount'] - 1 ;
}

      delete req.session.data['change-representation-position']
    //      console.log ("Read Me is " + choice.readMe) ;
    //        console.log ("Read Me is " + choice['readMe']) ;

  //  console.log(req.session.data['interestedPartiesView'])
  if (req.session.data['btnSave'] = "back"){
    res.redirect("/relevant-reps-v1/inspector-view");
    console.log("here")
  }
  else if (req.session.data['btnSave'] = "next")
  {
    console.log("here 2")
    res.redirect("/relevant-reps-v1/lost");
  }
});

router.post("/relevant-reps-v1/change-representationView-form-answer", function(req, res) {
 // console.log("Chris is here")
  if( req.session.data['change-representation-position'] ){

  let choice = req.session.data['change-representation-position']
  //console.log(choice)
  req.session.data['representationView'] = req.session.data['interestedPartiesView'][choice];
  //console.log(req.session.data['representationView']);
  }


    res.redirect("/relevant-reps-v1/inspector-view/add");


});


router.post("/relevant-reps-v1/load-inspector-data", function(req, res) {
  req.session.data['representationView'];
    req.session.data['repCount'] = 280;
    req.session.data['myReadCount'] = 37;
    req.session.data['myUnreadCount'] =  req.session.data['repCount'] - req.session.data['myReadCount']    ;
req.session.data['interestedPartiesView']= [
    {
      "ipNumber":"--",
      "duplicate":false,
      "status": "Awaiting review",
      "representationColourClass": "govuk-tag--grey",
      "organisationName": "Joe Bloggs Inc",
      "fullName": "Joe Bloggs",
      "emailAddress":"joe.bloggs@joebloggsinc.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
      "type" : "Members of the public/businesses",
        "redacted":"No",
      "representationOnBehalfOf":"Myself",
      "representationDateReceived":"2 Sept 2022",
	  "readMe":"",
	  "readOthers":"Yes",
    "examLibrary":"RR-0001",
      "wordCount":"187",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."

	},
    {
      "ipNumber":"--",
        "duplicate":false,
      "status": "Referred",
      "representationColourClass": "govuk-tag--blue",
      "organisationName": "Sally Wright Clinic",
      "fullName": "Sally Wright",
      "emailAddress":"s.wright@sallywrightclinic.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
      "type" : "Members of the public/businesses",
        "redacted":"No",
      "representationOnBehalfOf":"Myself",
      "representationDateReceived":"2 Sept 2022",
	 "readMe":"Yes",
	  "readOthers":"",
      "examLibrary":"RR-0002",
        "wordCount":"299",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
        "ipNumber":"3654123",
          "duplicate":false,
      "status": "Valid",
      "organisationName": "",
      "fullName": "Peter Biggins",
      "emailAddress":"peter.biggins@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
      "type" : "Members of the public/businesses",
        "redacted":"Yes",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"1 Sept 2022",
			 "readMe":"Yes",
	  "readOthers":"Yes",
      "examLibrary":"RR-0003",
        "wordCount":"99",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel.",
      "representationRedacted": "Redacted representation",
      "redactionNotes": "Removed reference to individual's health",
      "redactedBy":"Sarah Smith"
    },
    {
      "ipNumber":"--",
        "duplicate":true,
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Mike Smith",
      "emailAddress":"mike.smith@aol.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
        "redacted":"No",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 Aug 2022",
	"readMe":"",
	  "readOthers":"Yes",
      "examLibrary":"RR-0004",
        "wordCount":"1081",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
        "duplicate":false,
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Jennie Long",
      "emailAddress":"jennie.long@yahoo.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
        "redacted":"No",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 Aug 2022",
		"readMe":"",
	  "readOthers":"Yes",
      "examLibrary":"RR-0005",
        "wordCount":"441",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
        "duplicate":false,
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Paul Anderson",
      "emailAddress":"p.anderson@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
      "type" : "Members of the public/businesses",
        "redacted":"No",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"26 Aug 2022",
				"readMe":"",
	  "readOthers":"Yes",
      "examLibrary":"RR-0006",
        "wordCount":"39",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
        "duplicate":false,
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Annie Pearson",
      "emailAddress":"annie.pearson@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
        "redacted":"No",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"25 Aug 2022",
				"readMe":"",
	  "readOthers":"",
      "examLibrary":"RR-0007",
        "wordCount":"155",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
        "duplicate":false,
      "status": "Invalid",
        "representationColourClass": "govuk-tag--blue",
      "organisationName": "",
      "fullName": "James Shuck",
      "emailAddress":"j.schuck@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
        "redacted":"No",
        "representationDateReceived":"23 Aug 2022",
						"readMe":"Yes",
	  "readOthers":"",
      "examLibrary":"RR-0008",
        "wordCount":"222",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
        "duplicate":false,
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Helen Norris",
      "emailAddress":"h.norris@hnorris.org",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
        "redacted":"No",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 Aug 2022",
						"readMe":"Yes",
	  "readOthers":"",
      "examLibrary":"RR-0001",
        "wordCount":"89",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
        "duplicate":false,
      "status": "Valid",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Zoe Geddes",
      "emailAddress":"z.geddes@test.com",

        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC",

      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
        "redacted":"Yes",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 Aug 2022",
								"readMe":"Yes",
	  "readOthers":"",
      "examLibrary":"RR-0009",
        "wordCount":"181",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    }
  ]


    res.redirect("/relevant-reps-v1/theme/index-2");

});


router.post("/banners/load-prototype-data", function(req, res) {
  req.session.data['welsh']= false;
  req.session.data['banner'];
req.session.data['banners']= [
    {
      "dateCreated":"24 Feb 2023",
      "title":"Registration and RR form available",
      "content": "The Registration and Relevant Representations form is available until 23:59 on Friday 24 February 2023.",
      "emailSubscribers": "Yes",
      "author": "Joe Bloggs",
      "status": "Draft",
      "bannerColourClass": "govuk-tag--grey"
    },
    {
      "dateCreated":"10 Jan 2023",
      "title":"Registration opened",
      "content": "You can now register as an Interested Party.",
      "emailSubscribers": "Yes",
      "author": "Joe Bloggs",
      "status": "Published",
      "bannerColourClass": "govuk-tag--blue"
    },
    {
      "dateCreated":"22 Dec 2022",
      "title":"Applicant submitted additional submissions",
      "content": "The Applicant has submitted some Additional Submissions. The ExA has issued a letter (PDF, 162 KB) accepting these documents.",
      "emailSubscribers": "Yes",
      "author": "Chris Smith",
      "status": "Published",
      "bannerColourClass": "govuk-tag--blue"
    },
    {
      "dateCreated":"19 Dec 2022",
      "title":"Examining Authority issued documents",
      "content": "The Examining Authority has today issued the following documents.",
      "emailSubscribers": "No",
      "author": "Joe Bloggs",
      "status": "Published",
      "bannerColourClass": "govuk-tag--blue"
    },
    {
      "dateCreated":"28 Nov 2022",
      "title":"Read the letter",
      "content": "The application has been accepted for examination.",
      "emailSubscribers": "Yes",
      "author": "Chris Smith",
      "status": "Published",
      "bannerColourClass": "govuk-tag--blue"
    },
    {
      "dateCreated":"11 Nov 2022",
      "title":"The application documents have been published.",
      "content": "The documents have been published to help you become familiar with the proposal. There is no opportunity to make comments on the application at this stage.",
      "emailSubscribers": "Yes",
      "author": "Joe Bloggs",
      "status": "Published",
      "bannerColourClass": "govuk-tag--blue"
    },
    {
      "dateCreated":"2 Nov 2022",
      "title":"This application was received",
      "content": "The applicant has agreed that all application documents can be published as soon as practicable to help everyone become familiar with the detail of what is being proposed in this application. The Planning Inspectorate will therefore make the application documents available as soon as practicable.",
      "emailSubscribers": "Yes",
      "author": "Chris Smith",
      "status": "Published",
      "bannerColourClass": "govuk-tag--blue"
    },
    {
      "dateCreated":"15 Jul 2022",
      "title":"Registration and RR form available",
      "content": "The Registration and Relevant Representations form is available until 23:59 on Friday 24 February 2023.",
      "emailSubscribers": "Yes",
      "author": "Joe Bloggs",
      "status": "Published",
      "bannerColourClass": "govuk-tag--blue"
    },
    {
      "dateCreated":"24 Feb 2023",
      "title":"The application is expected to be re-submitted",
      "content": "The application is expected to be re-submitted to the Planning Inspectorate in Autumn 2022.",
      "emailSubscribers": "Yes",
      "author": "Joe Bloggs",
      "status": "Archived",
      "bannerColourClass": "govuk-tag--red"
    },
    {
      "dateCreated":"20 Nov 2022",
      "title":"Application withdrawn",
      "content": "The application has been withdrawn. Please see the Applicant’s letter (PDF, 119KB).",
      "emailSubscribers": "Yes",
      "author": "Joe Bloggs",
      "status": "Archived",
      "bannerColourClass": "govuk-tag--red"
    }
  ]
  console.log (req.session.data['banners']);
    res.redirect("/banners/");

});

router.post("/banners/load-prototype-data-welsh", function(req, res) {

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
      "bannerColourClass": "govuk-tag--grey"
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
      "bannerColourClass": "govuk-tag--blue"
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
      "bannerColourClass": "govuk-tag--blue"
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
      "bannerColourClass": "govuk-tag--blue"
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
      "bannerColourClass": "govuk-tag--blue"
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
      "bannerColourClass": "govuk-tag--blue"
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
      "bannerColourClass": "govuk-tag--blue"
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
      "bannerColourClass": "govuk-tag--blue"
    },
    {
      "dateCreated":"24 Feb 2023",
      "title":"The application is expected to be re-submitted",
      "content": "The application is expected to be re-submitted to the Planning Inspectorate in Autumn 2022.",
      "emailSubscribers": "Yes",
      "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
      "emailSubscribersWelsh":"Yes",
      "author": "Joe Bloggs",
      "status": "Archived",
      "bannerColourClass": "govuk-tag--red"
    },
    {
      "dateCreated":"20 Nov 2020",
      "title":"Application withdrawn",
      "content": "The application has been withdrawn. Please see the Applicant’s letter (PDF, 119KB).",
      "emailSubscribers": "Yes",
      "contentWelsh": "Dyma enghraifft o destun baner yn Gymraeg a fyddai'n mynd i gynnwys y faner",
      "emailSubscribersWelsh":"Yes",
      "author": "Joe Bloggs",
      "status": "Archived",
      "bannerColourClass": "govuk-tag--red"
    }
  ]
  console.log (req.session.data['banners']);
    res.redirect("/banners/");

});

router.post("/banners/change-banner-form-answer", function(req, res) {

  if( req.session.data['change-banner-position'] ){

  let choice = req.session.data['change-banner-position']
  console.log(choice)
  req.session.data['banner'] = req.session.data['banners'][choice];
  console.log(req.session.data['banner']);
  }


    res.redirect("/banners/summary");


});

router.post("/banners/create-journey-start", function(req, res) {

  if( req.session.data['welsh'] ){
    res.redirect("/banners/create/welsh/index");


  }
else {

}    res.redirect("/banners/create/index");




});

router.post("/banners/change-status-routing", function(req, res) {
  //Colour logic and IP number
  if (req.session.data.banner['status'] == "Draft"){
    req.session.data.banner['bannerColourClass'] = "govuk-tag--grey";
  }

  else if (req.session.data.banner['status'] == "Published"){
    req.session.data.banner['bannerColourClass'] = "govuk-tag--blue";
  }

  else {
    req.session.data.banner['bannerColourClass'] = "govuk-tag--red";
  }

      res.redirect("summary");
  //IP number

  });

  router.post("/banners/set-status-routing", function(req, res) {
    //Colour logic and IP number
    if (req.session.data.banner['status'] == "Draft"){
      req.session.data.banner['bannerColourClass'] = "govuk-tag--grey";
    }

    else if (req.session.data.banner['status'] == "Published"){
      req.session.data.banner['bannerColourClass'] = "govuk-tag--blue";
    }

    else {
      req.session.data.banner['bannerColourClass'] = "govuk-tag--red";
    }

        res.redirect("create/check-answers");
    //IP number

    });

  router.post("/banners/summary-routing", function(req, res) {

    if(!req.session.data['banners']) {
    req.session.data['banners'] = []
    }

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


router.post("/banners/check-answers-routing", function(req, res) {

  if(!req.session.data['banners']) {
  req.session.data['banners'] = []
  }

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
  res.redirect("/banners/index");

});


router.post("/templates/load-prototype-data", function(req, res) {
  req.session.data['welsh']= false;
  req.session.data['template'];
req.session.data['templates']= [
    {
      "name":"Pre app stage no timetable",
      "stage":"Pre-application",
      "author": "Joe Bloggs",
      "englishContent": "No timetable has been set for the planning application. Future updates will appear here.",
      "welshContent": "Nid oes amserlen wedi ei gosod ar gyfer y cais cynllunio. Bydd diweddariadau yn y dyfodol yn ymddangos yma.",
    },
    {
      "name":"Pre app stage  specific date",
      "stage":"Pre-application",
      "author": "Joe Bloggs",
      "englishContent": "The application is expected to be submitted by <day month year>.",
      "welshContent": "Disgwylir i'r cais gael ei gyflwyno erbyn <blwyddyn diwrnod mis>." ,
    },
    {
      "name":"Pre app stage generic date",
      "stage":"Pre-application",
      "author": "Joe Bloggs",
      "englishContent": "The application is expected to be submitted by <season year>.",
      "welshContent": "Disgwylir i'r cais gael ei gyflwyno erbyn <blwyddyn tymor>.",
    },
    {
      "name":"Pre app application being prepared",
      "stage":"Pre-application",
      "author": "Joe Bloggs",
      "englishContent": "The application is being prepared. There must be a consultation with people and organisations first, before it is sent to us.",
      "welshContent": "Mae'r cais yn cael ei baratoi. Rhaid ymgynghori â phobl a sefydliadau yn gyntaf, cyn iddo gael ei anfon atom..",
    },
    {
      "name":"Acceptance stage review",
      "stage":"Acceptance",
      "author": "Joe Bloggs",
      "englishContent": "We are reviewing the planning application. If we accept the application for examination, registration to have your say about the project will open.",
      "welshContent": "Rydym yn adolygu’r cais cynllunio. Os byddwn yn derbyn y cais i'w archwilio, bydd cofrestru i ddweud eich dweud am y prosiect yn agor.",
    },
    {
      "name":"Non acceptance for exam",
      "stage":"Acceptance",
      "author": "Joe Bloggs",
      "englishContent": "The proposed project has been accepted for examination. We will shortly publish the date when you can have your say and become an interested party. Read the acceptance letter",
      "welshContent": "Nid yw’r cais cynllunio wedi’i dderbyn i’w archwilio. Darllenwch y llythyr yn nodi pam.",
    },
    {
      "name":"Pre exam stage acceptance letter",
      "stage":"Pre-examination",
      "author": "Joe Bloggs",
      "englishContent": "The planning application has not been accepted for examination.  Read the letter stating why.",
      "welshContent": "Mae'r prosiect arfaethedig wedi'i dderbyn i'w archwilio. Cyn bo hir byddwn yn cyhoeddi'r dyddiad y gallwch ddweud eich dweud a dod yn barti â diddordeb. Darllenwch y llythyr derbyn.",
    },
    {
      "name":"Pre exam stage project open for have your say no date",
      "stage":"Pre-examination",
      "author": "Joe Bloggs",
      "englishContent": "The project is now open for people to have their say and register to become an interested party. View register to have your say guidance.",
      "welshContent": "Mae'r prosiect bellach ar agor i bobl gael dweud eu dweud a chofrestru i ddod yn barti â diddordeb. Gweld y gofrestr i gael dweud eich dweud.",
    },
    {
      "name":"Pre exam stage project open for have your say specific date",
      "stage":"Pre-examination",
      "author": "Joe Bloggs",
      "englishContent": "The deadline has been extended for people to have their say and register to become an interested party. Registration will now close at <time> <daymonthyear>. View register to have your say guidance.      ",
      "welshContent": "Mae'r dyddiad cau wedi'i ymestyn i bobl gael dweud eu dweud a chofrestru i ddod yn barti â diddordeb. Bydd cofrestru nawr yn cau am <time> <daymonthyear>. Gweld y gofrestr i gael dweud eich dweud.",
    },
    {
      "name":"Pre exam comments published",
      "stage":"Pre-examination",
      "author": "Joe Bloggs",
      "englishContent": "We have published all of the comments from people wishing to have their say about this project. The individuals who have registered are now known as an ‘interested party’ and together they form relevant representations for this project. View all relevant representations",
      "welshContent": "Rydym wedi cyhoeddi’r holl sylwadau gan bobl sy’n dymuno dweud eu dweud am y prosiect hwn. Mae’r unigolion sydd wedi cofrestru bellach yn cael eu hadnabod fel ‘parti â buddiant’ a gyda’i gilydd maent yn ffurfio cynrychioliadau perthnasol ar gyfer y prosiect hwn.Gweld yr holl sylwadau perthnasol.",
    },
    {
      "name":"Pre exam preliminary meeting date",
      "stage":"Pre-examination",
      "author": "Joe Bloggs",
      "englishContent": "The preliminary meeting for this project will take place at <time am/pm> on <daymonthyear>. This can be found in the Rule 6 letter along with: the draft examination timetable, the initial assessment of the main (principal) issues. View the Rule 6 letter.",
      "welshContent": "Bydd y cyfarfod rhagarweiniol ar gyfer y prosiect hwn yn cael ei gynnal am <amser am/pm> ar <daymonthyear>. Mae hwn i’w weld yn llythyr Rheol 6 ynghyd â: amserlen yr arholiad drafft, asesiad cychwynnol o'r prif (prif faterion). Gweld llythyr Rheol 6.",
    },
    {
      "name":"Pre exam project to examination set date",
      "stage":"Pre-examination",
      "author": "Joe Bloggs",
      "englishContent": "This project will move into the examination stage on <daymonthyear>. Read what happens during the examination stage.",
      "welshContent": "Bydd y prosiect hwn yn symud i'r cam archwilio ar <flwyddyn dydd>. Darllenwch beth sy'n digwydd yn ystod y cam arholiad.",
    }
  ]
  console.log (req.session.data['templates']);
    res.redirect("/templates/");

});


router.post("/templates/check-answers-routing", function(req, res) {

  if(!req.session.data['templates']) {
  req.session.data['templates'] = []
  }

  //Set banner date
  req.session.data.template['author'] = "Bob Bloggs";
  req.session.data['templateAlert'] = true;

  // set corrections array as a variable
  let submissionData = req.session.data['templates']

  // access the set of sales details the user has just entered
  let choice = req.session.data['template']


  // check if the user is changing some details already entered
  let change = req.session.data['change-template-position']

  // call the function to add the latest correction to the corrections
  addToList(choice, submissionData, change)


          delete req.session.data['change-template-position']


  console.log(req.session.data['templates'])
  res.redirect("/templates/index");

});

router.post("/templates/change-template-form-answer", function(req, res) {

  if( req.session.data['change-template-position'] ){

  let choice = req.session.data['change-template-position']
  console.log(choice)
  req.session.data['template'] = req.session.data['templates'][choice];
  console.log(req.session.data['template']);
  }


    res.redirect("/templates/summary");


});

router.post("/templates/summary-routing", function(req, res) {

  if(!req.session.data['templates']) {
  req.session.data['templates'] = []
  }

  // set corrections array as a variable
  let submissionData = req.session.data['templates']

  // access the set of sales details the user has just entered
  let choice = req.session.data['template']


  // check if the user is changing some details already entered
  let change = req.session.data['change-template-position']

  // call the function to add the latest correction to the corrections
  addToList(choice, submissionData, change)


          delete req.session.data['change-template-position']


  console.log(req.session.data['templates'])
  res.redirect("index");

});

module.exports = router
