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


//// this is garbage create separate  routes file

module.exports = function (router) {

router.post("/relevant-reps-v2/load-prototype-data", function(req, res) {
  req.session.data['representation'];
  req.session.data['noresults'];
  req.session.data['published'] = "false";
  req.session.data['noresults'] = "false";

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
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
      "OnBehalfOrganisationName": "",
      "onBehalfFirstName": "",
      "onBehalfLastName": "",
      "onBehalfTelNumber": "",
      "onBehalfEmailAddress":"",
      "onBehalfAddressLine1": "",
      "onBehalfAddressLine2" : "",
      "onBehalfTownOrCity": "",
      "onBehalfCountry": "",
      "OnBehalfPostcode": "",
      "OnBehalfPreferredContact": "",
      "onBehalfType" : "",
        "redacted":"Unredacted",
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
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
      "OnBehalfOrganisationName": "",
      "onBehalfFirstName": "",
      "onBehalfLastName": "",
      "onBehalfTelNumber": "",
      "onBehalfEmailAddress":"",
      "onBehalfAddressLine1": "",
      "onBehalfAddressLine2" : "",
      "onBehalfTownOrCity": "",
      "onBehalfCountry": "",
      "OnBehalfPostcode": "",
      "OnBehalfPreferredContact": "",
      "onBehalfType" : "",

        "redacted":"Unredacted",
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
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
      "OnBehalfOrganisationName": "",
      "onBehalfFirstName": "",
      "onBehalfLastName": "",
      "onBehalfTelNumber": "",
      "onBehalfEmailAddress":"",
      "onBehalfAddressLine1": "",
      "onBehalfAddressLine2" : "",
      "onBehalfTownOrCity": "",
      "onBehalfCountry": "",
      "OnBehalfPostcode": "",
      "OnBehalfPreferredContact": "",
      "onBehalfType" : "",
        "redacted":"Redacted",
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
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
      "OnBehalfOrganisationName": "",
      "onBehalfFirstName": "",
      "onBehalfLastName": "",
      "onBehalfTelNumber": "",
      "onBehalfEmailAddress":"",
      "onBehalfAddressLine1": "",
      "onBehalfAddressLine2" : "",
      "onBehalfTownOrCity": "",
      "onBehalfCountry": "",
      "OnBehalfPostcode": "",
      "OnBehalfPreferredContact": "",
      "onBehalfType" : "",
        "redacted":"Unredacted",
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
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
      "OnBehalfOrganisationName": "",
      "onBehalfFirstName": "",
      "onBehalfLastName": "",
      "onBehalfTelNumber": "",
      "onBehalfEmailAddress":"",
      "onBehalfAddressLine1": "",
      "onBehalfAddressLine2" : "",
      "onBehalfTownOrCity": "",
      "onBehalfCountry": "",
      "OnBehalfPostcode": "",
      "OnBehalfPreferredContact": "",
      "onBehalfType" : "",
        "redacted":"Redacted",
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
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
      "OnBehalfOrganisationName": "",
      "onBehalfFirstName": "",
      "onBehalfLastName": "",
      "onBehalfTelNumber": "",
      "onBehalfEmailAddress":"",
      "onBehalfAddressLine1": "",
      "onBehalfAddressLine2" : "",
      "onBehalfTownOrCity": "",
      "onBehalfCountry": "",
      "OnBehalfPostcode": "",
      "OnBehalfPreferredContact": "",
      "onBehalfType" : "",
        "redacted":"Unredacted",
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
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
      "OnBehalfOrganisationName": "",
      "onBehalfFirstName": "",
      "onBehalfLastName": "",
      "onBehalfTelNumber": "",
      "onBehalfEmailAddress":"",
      "onBehalfAddressLine1": "",
      "onBehalfAddressLine2" : "",
      "onBehalfTownOrCity": "",
      "onBehalfCountry": "",
      "OnBehalfPostcode": "",
      "OnBehalfPreferredContact": "",
      "onBehalfType" : "",
        "redacted":"Redacted",
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
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
      "OnBehalfOrganisationName": "",
      "onBehalfFirstName": "",
      "onBehalfLastName": "",
      "onBehalfTelNumber": "",
      "onBehalfEmailAddress":"",
      "onBehalfAddressLine1": "",
      "onBehalfAddressLine2" : "",
      "onBehalfTownOrCity": "",
      "onBehalfCountry": "",
      "OnBehalfPostcode": "",
      "OnBehalfPreferredContact": "",
      "onBehalfType" : "",
      "representationOnBehalfOf":"Myself",
        "redacted":"Unredacted",
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
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
      "OnBehalfOrganisationName": "",
      "onBehalfFirstName": "",
      "onBehalfLastName": "",
      "onBehalfTelNumber": "",
      "onBehalfEmailAddress":"",
      "onBehalfAddressLine1": "",
      "onBehalfAddressLine2" : "",
      "onBehalfTownOrCity": "",
      "onBehalfCountry": "",
      "OnBehalfPostcode": "",
      "OnBehalfPreferredContact": "",
      "onBehalfType" : "",
        "redacted":"Unredacted",
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
      "OnBehalfOrganisationName": "",
      "onBehalfFirstName": "",
      "onBehalfLastName": "",
      "onBehalfTelNumber": "",
      "onBehalfEmailAddress":"",
      "onBehalfAddressLine1": "",
      "onBehalfAddressLine2" : "",
      "onBehalfTownOrCity": "",
      "onBehalfCountry": "",
      "OnBehalfPostcode": "",
      "OnBehalfPreferredContact": "",
      "onBehalfType" : "",
        "redacted":"Redacted",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    }
  ]

    res.redirect("/relevant-reps-v2/");

});


router.post("/relevant-reps-v2/load-prototype-data-published", function(req, res) {
  req.session.data['representation'];
  req.session.data['published'] = "true";
req.session.data['interestedParties']= [
    {
      "ipNumber":"365411",
      "duplicate":false,
      "status": "Published",
      "representationColourClass": "govuk-tag--green",
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
        "redacted":"Redacted",
      "representationOnBehalfOf":"Myself",
      "representationDateReceived":"2 Sept 2022",

      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"365412",
        "duplicate":false,
      "status": "Published",
      "representationColourClass": "govuk-tag--green",
      "organisationName": "Sally Wright Clinic",
      "firstName": "Sally",
      "lastName": "Wright",
      "jobTitle": "Computer Scientist",
      "telNumber": "0113 232 999",
      "emailAddress":"s.wright@sallywrightclinic.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"Redacted",
      "representationOnBehalfOf":"Myself",
      "representationDateReceived":"2 Sept 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
        "ipNumber":"3654123",
          "duplicate":false,
      "status": "Published",
      "representationColourClass": "govuk-tag--green",
      "organisationName": "",
      "firstName": "Peter",
      "lastName": "Biggins",
      "jobTitle": "Plumber",
      "telNumber": "0113 232 999",
      "emailAddress":"peter.biggins@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"Redacted",
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
      "status": "Withdrawn",
        "representationColourClass": "govuk-tag--red",
      "organisationName": "",
      "firstName": "Mike",
      "lastName": "Smith",
      "jobTitle": "Teacher",
      "telNumber": "0113 232 999",
      "emailAddress":"mike.smith@aol.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"Redacted",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"3654125",
        "duplicate":false,
      "status": "Published",
      "representationColourClass": "govuk-tag--green",
      "organisationName": "",
      "firstName": "Jennie",
      "lastName": "Long",
      "jobTitle": "Administrator",
      "telNumber": "0113 232 999",
      "emailAddress":"jennie.long@yahoo.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"Redacted",
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
      "status": "Published",
        "representationColourClass": "govuk-tag--green",
      "organisationName": "",
      "firstName": "Paul",
      "lastName": "Anderson",
      "jobTitle": "Civil servant",
      "telNumber": "0113 232 999",
      "emailAddress":"p.anderson@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Email",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"Redacted",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"26 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"3654127",
        "duplicate":false,
      "status": "Published",
      "representationColourClass": "govuk-tag--green",
      "organisationName": "",
      "firstName": "Annie",
      "lastName": "Pearson",
      "jobTitle": "Cleaner",
      "telNumber": "0113 232 999",
      "emailAddress":"annie.pearson@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
        "redacted":"Redacted",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"25 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"3654128",
        "duplicate":false,
      "status": "Withdrawn",
        "representationColourClass": "govuk-tag--red",
      "organisationName": "",
      "firstName": "James",
      "lastName": "Shuck",
      "jobTitle": "Surveyor",
      "telNumber": "0113 232 999",
      "emailAddress":"j.schuck@test.com",
      "addressLine1": "Test House and Street",
      "addressLine2" : "",
      "townOrCity": "Birmingham",
      "country": "",
      "postcode": "BM1 ABC",
      "preferredContact": "Post",
        "over18": "Yes",
      "type" : "Members of the public/businesses",
      "representationOnBehalfOf":"Myself",
        "redacted":"Redacted",
        "representationDateReceived":"23 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"3654219",
        "duplicate":false,
      "status": "Published",
        "representationColourClass": "govuk-tag--green",
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
      "country": "",
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
      "onBehalfCountry": "",
      "OnBehalfPostcode": "SE1 ABC",
      "OnBehalfPreferredContact": "Post",
      "onBehalfType" : "Members of the public/businesses",
      "onBehalfOver18": "Yes",
        "redacted":"Redacted",
      "representationOnBehalfOf":"A representative on behalf of another person, family group or organisation",
        "representationDateReceived":"27 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    },
    {
      "ipNumber":"36542120",
        "duplicate":false,
      "status": "Published",
      "representationColourClass": "govuk-tag--green",
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
        "country": "",
        "postcode": "BM1 ABC",

      "preferredContact": "Post",
      "type" : "Members of the public/businesses",
        "redacted":"Redacted",
      "representationOnBehalfOf":"Myself",
        "representationDateReceived":"27 Aug 2022",
      "representationOriginal": "This is an example representation - most take around 187 words. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi lorem, posuere ut sagittis id, rutrum vel purus. Phasellus tellus arcu, mattis at tincidunt id, sodales sit amet ante. Mauris felis leo, hendrerit vel blandit eget, dictum ac metus. Etiam ut eros gravida, ultricies magna ac, tempor mi. Fusce tempor lacinia orci, quis gravida mi condimentum quis. Nam iaculis, mi ac posuere dignissim, quam diam sagittis leo, sit amet viverra nisi ligula nec sem. Maecenas maximus a neque sed efficitur.Mauris auctor elit quis ex ultricies, non tempus nisl commodo. Cras eu posuere massa, vitae sagittis leo. Curabitur ac erat massa. Vivamus rhoncus quam lorem, ut imperdiet erat laoreet vel. Sed non massa quis metus mattis eleifend. Fusce vitae nisl volutpat, vehicula nisi et, dapibus ipsum. Vestibulum et ultrices lorem, a ultricies dolor. Donec interdum viverra ex, non sollicitudin ante mollis sit amet. Morbi sit amet tortor nec augue convallis eleifend. Phasellus fringilla lectus ac risus congue tempor. Curabitur malesuada nunc sit amet est ultricies euismod. Duis ut augue et ligula porttitor ultricies. Morbi vel."
    }
  ]

    res.redirect("/relevant-reps-v2/");

});


router.get('/relevant-reps-v2', function (req, res) {
  res.render('relevant-reps-v2/index', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/index', function (req, res) {
  res.render('relevant-reps-v2/index', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/add/contact', function (req, res) {
  res.render('relevant-reps-v2/add/contact', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/add/address', function (req, res) {
  res.render('relevant-reps-v2/add/address', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/add/preferred-contact', function (req, res) {
  res.render('relevant-reps-v2/add/preferred-contact', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/audit/index', function (req, res) {
  res.render('relevant-reps-v2/audit/index', { projectNo: 'project05' })
})


router.get('/relevant-reps-v2/invalid/index', function (req, res) {
  res.render('relevant-reps-v2/invalid/index', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/referred/index', function (req, res) {
  res.render('relevant-reps-v2/referred/index', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/status', function (req, res) {
  res.render('relevant-reps-v2/status', { projectNo: 'project05' })
})


router.get('/relevant-reps-v2/add/representation', function (req, res) {
  res.render('relevant-reps-v2/add/representation', { projectNo: 'project05' })
})


router.get('/relevant-reps-v2/add/representee', function (req, res) {
  res.render('relevant-reps-v2/add/representee', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/add/attachments', function (req, res) {
  res.render('relevant-reps-v2/add/attachments', { projectNo: 'project05' })
})


router.get('/relevant-reps-v2/add/type', function (req, res) {
  res.render('relevant-reps-v2/add/type', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/add/over18', function (req, res) {
  res.render('relevant-reps-v2/add/over18', { projectNo: 'project05' })
})


router.get('/relevant-reps-v2/summary', function (req, res) {
  res.render('relevant-reps-v2/summary', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/add/check-answers', function (req, res) {
  res.render('relevant-reps-v2/add/check-answers', { projectNo: 'project05' })
})


router.get('/relevant-reps-v2/add/confirmation', function (req, res) {
  res.render('relevant-reps-v2/add/confirmation', { projectNo: 'project05' })
})


router.get('/relevant-reps-v2/redact', function (req, res) {
  res.render('relevant-reps-v2/redact', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/edit/address', function (req, res) {
  res.render('relevant-reps-v2/edit/address', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/edit/attachments', function (req, res) {
  res.render('relevant-reps-v2/edit/attachments', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/edit/contact', function (req, res) {
  res.render('relevant-reps-v2/edit/contact', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/edit/over18', function (req, res) {
  res.render('relevant-reps-v2/edit/over18', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/redaction', function (req, res) {
  res.render('relevant-reps-v2/redaction', { projectNo: 'project05' })
})

// router.get('/relevant-reps-v1/inspector-view/add', function (req, res) {
//   res.render('relevant-reps-v1/inspector-view/add', { projectNo: 'project05' })
// })



router.get('/relevant-reps-v2/edit/preferred-contact', function (req, res) {
  res.render('relevant-reps-v2/edit/preferred-contact', { projectNo: 'project05' })
})

router.get('/relevant-reps-v2/edit/representation', function (req, res) {
  res.render('relevant-reps-v2/edit/representee', { projectNo: 'project05' })
})

router.post("/relevant-reps-v2/check-answers-routing", function(req, res) {
    //Add default Values
    req.session.data.representation['status']="Awaiting review";
    req.session.data.representation['representationColourClass']= "govuk-tag--grey";
    req.session.data.representation['representationDateReceived'] = "1 August 2022";
    req.session.data.representation['redacted'] = "No";
    req.session.data.representation['ipNumber'] = "365310";


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
    res.redirect("/relevant-reps-v2/index?added=true");

});


router.post("/relevant-reps-v2/add-rep-routing", function(req, res) {
  if (req.session.data.representation['representationOnBehalfOf']=="A representative on behalf of another person, family group or organisation"){
    res.redirect("/relevant-reps-v2/add/add-all-agent");

  }
  else {
    res.redirect("/relevant-reps-v2/add/representation");

  }

});

router.post("/relevant-reps-v2/summary-routing", function(req, res) {

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


router.post("/relevant-reps-v2/change-status-routing", function(req, res) {
//Colour logic and IP number
if (req.session.data.representation['status'] == "Awaiting review"){
  req.session.data.representation['ipNumber']="";
  req.session.data.representation['representationColourClass'] = "govuk-tag--grey";
  res.redirect("statuschange/index");
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
else if (req.session.data.representation['status'] == "Withdrawn"){
  req.session.data.representation['ipNumber']="";
req.session.data.representation['representationColourClass'] = "govuk-tag--blue";
  res.redirect("statuschange/index");
}

else {
  req.session.data.representation['representationColourClass'] = "";
    req.session.data.representation['ipNumber']="3654124";
}
    res.redirect("summary");
//IP number

});


// CB added 17-03
router.post("/relevant-reps-v2/search-representation-answer", function(req, res) {

  let searchTerm = req.session.data['searchTerm']

  if (searchTerm == 'bad'){
      req.session.data['zeroResults'] = "Nothing found";
      res.redirect("/relevant-reps-v2/index-no-results");
  }
  else{
    req.session.data['zeroResults'] = "";
  }
  console.log(searchTerm)
//  req.session.data['representation'] = req.session.data['interestedParties'][choice];
//  console.log(req.session.data['representation']);

    res.redirect("/relevant-reps-v2/index");


});


router.post("/relevant-reps-v2/change-representation-form-answer", function(req, res) {

  if( req.session.data['change-representation-position'] ){

  let choice = req.session.data['change-representation-position']
  console.log(choice)
  req.session.data['representation'] = req.session.data['interestedParties'][choice];
  console.log(req.session.data['representation']);
  }


    res.redirect("/relevant-reps-v2/summary");


});

router.post("/redact-routing", function(req, res) {

  req.session.data.representation['redacted']="Yes";

// Updated upstream
console.log(req.session.data.representation['redacted'])
console.log("This is running");
    res.redirect("/relevant-reps-v2/summary");

console.log(req.session.data['redacted'])
    res.redirect("/relevant-reps-v2/add");


});


router.post("/relevant-reps-v2/inspector-view/add-routing", function(req, res) {

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
    res.redirect("/relevant-reps-v2/inspector-view");
    console.log("here")
  }
  else if (req.session.data['btnSave'] = "next")
  {
    console.log("here 2")
    res.redirect("/relevant-reps-v2/lost");
  }
});

router.post("/relevant-reps-v2/change-representationView-form-answer", function(req, res) {
 // console.log("Chris is here")
  if( req.session.data['change-representation-position'] ){

  let choice = req.session.data['change-representation-position']
  //console.log(choice)
  req.session.data['representationView'] = req.session.data['interestedPartiesView'][choice];
  //console.log(req.session.data['representationView']);
  }


    res.redirect("/relevant-reps-v2/inspector-view/add");


});


router.post("/relevant-reps-v2/load-inspector-data", function(req, res) {
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
      "country": "",
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
      "country": "",
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
      "country": "",
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
      "country": "",
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
      "country": "",
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
      "country": "",
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
      "country": "",
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
      "country": "",
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
      "country": "",
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
        "country": "",
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


    res.redirect("/relevant-reps-v2/theme/index-2");

});


router.post("/relevant-reps/add-start", function(req, res) {

  req.session.data['checkAns']="False";
  req.session.data['error']= 0;
  console.log(req.session.data['checkAns']);

    res.redirect("/relevant-reps-v2/add/contact");


});

router.post("/relevant-reps/check-answers-start", function(req, res) {

  req.session.data['checkAns']="True";
  req.session.data['Upload'] = 0;
  console.log(req.session.data['checkAns']);

    res.redirect("/relevant-reps-v2/add/check-answers");


});

router.post("/relevant-reps/add/representee-answer", function(req, res) {


  console.log("working");
  if (req.session.data.representation['representationOnBehalfOf'] == "A representative on behalf of another person, family group or organisation") {
    res.redirect("/relevant-reps-v2/add/agent/contact");
  }
  else {
    res.redirect("/relevant-reps-v2/add/representation");
  }




});


router.post("/relevant-reps/add/contact-answer", function(req, res) {


  //  error handler not used just pass in url to demonstrate error handling
  if (!req.session.data.representation['firstlName'] && !req.session.data.representation['lastName'] )  {
  //  res.redirect("/relevant-reps-v2/add/contact?error=1");
    res.redirect("/relevant-reps-v2/add/address");
  }
  else {
    res.redirect("/relevant-reps-v2/add/address");
  }




});

router.post("/relevant-reps/files-answer", function(req, res) {

req.session.data['Upload']  = "The view from my window.jpg" ;
  //  error handler not used just pass in url to demonstrate error handling
  req.session.data['published'] = "false";


    res.redirect("/relevant-reps-v2/summary");





});

router.post("/relevant-reps/files-add-answer", function(req, res) {

req.session.data['Upload']  = "The view from my window.jpg" ;
  //  error handler not used just pass in url to demonstrate error handling
  req.session.data['published'] = "false";
  

    res.redirect("/relevant-reps-v2/add-check-answers");





});



}
