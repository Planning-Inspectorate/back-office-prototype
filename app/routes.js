const express = require('express')
const router = express.Router()

const app = express() // the main app
const admin = express() // the sub app

// Add your routes here - above the module.exports line


//  I don't know Express, sorry for the hacks
router.get(/index/, function(req, res) {
  const projectNo = req.query.project;
  const url = req.path;
  const sprint = url.split( '/' )[1];
  const url2 = url.replace(/(?:.*?\/){2}/, '');

  console.log(req.session.data['project01']['documents'])

  res.render(sprint + '/' + url2 , { projectNo: projectNo })

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
