const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

//  SORT THIS OUT LATER..



router.get('/design-sprint-0/project-information/overview/project02', function (req, res) {

  res.render('design-sprint-0/project-information/overview', { projectNo: 'project02' })
})

router.get('/design-sprint-0/project-information/overview/project03', function (req, res) {

  res.render('design-sprint-0/project-information/overview', { projectNo: 'project03' })
})

router.get('/design-sprint-0/project-information/overview/project03', function (req, res) {

  res.render('design-sprint-0/project-information/overview', { projectNo: 'project04' })
})

router.get('/design-sprint-0/project-information/overview', function (req, res) {

  res.render('design-sprint-0/project-information/overview', { projectNo: 'project01' })
})



// router.get('/design-sprint-0/project-information/overview?project03', function (req, res) {
//
//   res.render('design-sprint-0/project-information/overview', { projectNo: 'project03' })
// })
//
//
// router.get('/design-sprint-0/project-information/overview?project04', function (req, res) {
//
//   res.render('design-sprint-0/project-information/overview', { projectNo: 'project04' })
// })
//
//


module.exports = router
