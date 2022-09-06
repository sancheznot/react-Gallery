const { Router } = require("express");
const router = Router();
const { getImages , postImages, getImage, deleteImages, EditImage} = require('../controllers/images.controller')

router.route("/upload")
    .get(getImages)
    .post(postImages);

router.route("/uploaded/:id")
    .get(getImage)
    .delete(deleteImages)
    .put(EditImage)
module.exports = router;
