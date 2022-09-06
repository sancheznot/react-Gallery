const AWS = require("aws-sdk");
const config = require("../config");
const Image = require("../models/images");
const imgControl = {};

const spacesEndpoint = new AWS.Endpoint(config.endPoint);
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
});

imgControl.getImages = async (req, res, next) => {
  const images = await Image.find();
  return res.json(images);
};

imgControl.postImages = async (req, res, next) => {
  const { file } = req.files;
  try {
    const res = await s3
      .putObject({
        ACL: "public-read",
        Bucket: config.bucketName,
        Body: file.data,
        Key: file.name,
      })
      .promise();
    const urlImage = `https:${config.bucketName}.${config.endPoint}/${file.name}`;
    const image = new Image({
      url: urlImage,
      title: req.body.title,
      key: file.name,
    });
    await image.save();
    return res.json(image);
  } catch (err) {}
};

imgControl.getImage = async (req, res, next) => {
  const image = await Image.findById(req.params.id);
  return res.json(image);
};

imgControl.deleteImages = async (req, res, next) => {
  const deleteImage = await Image.findByIdAndDelete(req.params.id);
  await s3
    .deleteObject({
      Bucket: config.bucketName,
      Key: deleteImage.key,
    })
    .promise();
  res.json(deleteImage);
};

imgControl.EditImage = (req, res, next) => {
  res.json({ message: "soy edit" });
};
module.exports = imgControl;
