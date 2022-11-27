const express = require('express')
const router = express.Router()

const app = express() // the main app
const admin = express() // the sub app

// Add your routes here - above the module.exports line


//  I don't know Express, sorry for the hacks.

//Store project IDs so pages can be populated with project information dynamically, also stores Base(sprint) folder to allow previous iterations not to break
router.get(/index/, function(req, res) {
  const projectNo = req.query.project;
  const url = req.path;
  const sprint = url.split( '/' )[1];
  const url2 = url.replace(/(?:.*?\/){2}/, '');

  req.session.data.projectNo = projectNo

  res.render(sprint + '/' + url2 , { projectNo: projectNo })

});

//reminder to return once pages are update to remove passed variable

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



module.exports = router
