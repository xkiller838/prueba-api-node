import express from 'express';
const router = express.Router();
const multer  = require('multer');
const upload = multer();

const userController = require('../controllers/user');

router.post("/api/user/create", upload.none(), userController.create)

router.get("/api/user/index", userController.index)


module.exports = router