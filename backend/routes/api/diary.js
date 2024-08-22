const express = require('express');
const router = express.Router();
const diaryController = require('../../controllers/diaryController.js');

router.route('/')
    .get(diaryController.getAllDiary)
    .post(diaryController.createNewDiary)
    .put(diaryController.updateDiary)
    .delete(diaryController.deleteDiary);

router.route('/:id')
    .get(diaryController.getDiary);

module.exports = router; 