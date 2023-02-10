const express = require('express')
const router = express.Router()

const app = express() // the main app
const admin = express() // the sub app

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
  var status;
  var redaction;

  var url = req.path;
  var sprint = url.split( '/' )[1];
  var url2 = url.replace(/(?:.*?\/){2}/, '');

  if (url2 == "project-documentation/status") {
    status = req.body.status;
    redaction = req.body.redaction;

    docStatus (projectNo, docNo, status, redaction, req)
    res.render(sprint + "/project-documentation/index", { projectNo: projectNo })
  }

  if (url2 == "project-documentation/publish/status") {
    status = "Published";
    docStatus (projectNo, docNo, status, redaction, req)
    res.render(sprint + "/project-documentation/publish/submit", { projectNo: projectNo, docNo: docNo })
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
      console.log(url2)

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

    console.log(req.session.data[projectNo]['examtimetable'])

    res.render(sprint + '/' + url2 , { projectNo: projectNo, docNo: docNo, itemNo: itemNo, docString: docString})
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
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
        "ipNumber":"3654123",
          "duplicate":false,
      "status": "Valid",
      "organisationName": "",
      "firstName": "Peter",
      "lastName": "Biggins",
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
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"3654125",
        "duplicate":false,
      "status": "Published",
      "organisationName": "",
      "firstName": "Jennie",
      "lastName": "Long",
      "emailAddress":"jennie.long@yahoo.com",
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
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"3654127",
        "duplicate":false,
      "status": "Valid",
      "organisationName": "",
      "firstName": "Annie",
      "lastName": "Pearson",
      "emailAddress":"annie.pearson@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "county": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
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
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"36542120",
        "duplicate":false,
      "status": "Valid",

      "organisationName": "",
      "firstName": "Zoe",
      "lastName": "Geddes",
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


module.exports = router
