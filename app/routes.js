const express = require('express')
const router = express.Router()

const app = express() // the main app
const admin = express() // the sub app

// Add your routes here - above the module.exports line


//  I don't know Express, sorry for the hacks.

//Store project IDs so pages can be populated with project information dynamically, also stores Base(sprint) folder to allow previous iterations not to break

//reminder to return once pages are update to remove passed variable
router.get(/index/, function(req, res) {
  const projectNo = req.query.project;
  const url = req.path;
  const sprint = url.split( '/' )[1];
  const url2 = url.replace(/(?:.*?\/){2}/, '');

  req.session.data.projectNo = projectNo
  res.render(sprint + '/' + url2 , { projectNo: projectNo })

});


router.get("/reset", function (req, res) {
  req.session.destroy(function(err) {
      res.redirect("/");
  });
});









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


router.get('/relevant-reps-v1', function (req, res) {
  //Load test data
  req.session.data['representation'];
req.session.data['interestedParties']= [
    {
      "ipNumber":"--",
      "status": "Awaiting review",
      "representationColourClass": "govuk-tag--grey",
      "organisationName": "Joe Bloggs Inc",
      "fullName": "Joe Bloggs",
      "emailAddress":"joe.bloggs@joebloggsinc.com",
      "address": [ {
        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC"
        }],
      "preferredContact": "Email",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
      "representationDateReceived":"2 September 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
      "status": "Referred",
      "representationColourClass": "govuk-tag--blue",
      "organisationName": "Sally Wright Clinic",
      "fullName": "Sally Wright",
      "emailAddress":"s.wright@sallywrightclinic.com",
      "address": [ {
        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC"
        }],
      "preferredContact": "Email",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
      "representationDateReceived":"2 September 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
        "ipNumber":"REP-001",
      "status": "Ready to publish",
      "organisationName": "",
      "fullName": "Peter Biggins",
      "emailAddress":"peter.biggins@test.com",
      "address": [ {
        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC"
        }],
      "preferredContact": "Email",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"1 September 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel.",
      "representationRedacted": "Redacted representation",
      "redactionNotes": "Removed reference to individual's health",
      "redactedBy":"Sarah Smith"
    },
    {
      "ipNumber":"--",
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Mike Smith",
      "emailAddress":"mike.smith@aol.com",
      "address": [ {
        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC"
        }],
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 August 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Jennie Long",
      "emailAddress":"jennie.long@yahoo.com",
      "address": [ {
        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC"
        }],
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 August 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Paul Anderson",
      "emailAddress":"p.anderson@test.com",
      "address": [ {
        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC"
        }],
      "preferredContact": "Email",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"26 August 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Annie Pearson",
      "emailAddress":"annie.pearson@test.com",
      "address": [ {
        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC"
        }],
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"25 August 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
      "status": "Invalid",
        "representationColourClass": "govuk-tag--blue",
      "organisationName": "",
      "fullName": "James Shuck",
      "emailAddress":"j.schuck@test.com",
      "address": [ {
        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC"
        }],
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"23 August 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Helen Norris",
      "emailAddress":"h.norris@hnorris.org",
      "address": [ {
        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC"
        }],
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 August 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"--",
      "status": "Awaiting review",
        "representationColourClass": "govuk-tag--grey",
      "organisationName": "",
      "fullName": "Zoe Geddes",
      "emailAddress":"z.geddes@test.com",
      "address": [ {
        "addressLine1": "Test House and Street",
        "addressLine2" : "",
        "townOrCity": "Birmingham",
        "county": "",
        "postcode": "BM1 ABC"
        }],
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 August 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    }
  ]

  res.render('relevant-reps-v1/index', { projectNo: 'project05' })
})

router.get('/relevant-reps-v1/summary', function (req, res) {

  res.render('relevant-reps-v1/summary', { projectNo: 'project05' })
})

router.post("/relevant-reps-v1/change-representation-form-answer", function(req, res) {

  if( req.session.data['change-representation-position'] ){

  let choice = req.session.data['change-representation-position']
  console.log(choice)
  req.session.data['representation'] = req.session.data['interestedParties'][choice];
  console.log(req.session.data['representation']);
  }


    res.redirect("/relevant-reps-v1/summary");


});


module.exports = router
