const express = require('express');
const router = express.Router();

const usersController = require('../controllers/create_controller');
const getproject=require('../controllers/getProject_controller');
const addIssue=require('../controllers/getIssue_controller')
const createIssuePage=require('../controllers/createIssue_controller');
const viewIssuePage=require('../controllers/viewIssue_controller')


router.post('/create',usersController.create);
router.get('/getproject',getproject.getProject);
router.get('/addIssue/:id',addIssue.addIssuePage);
router.get('/viewIssue/:id',viewIssuePage.viewIssue1);
router.post('/createIssue',createIssuePage.createIssue);

module.exports = router;