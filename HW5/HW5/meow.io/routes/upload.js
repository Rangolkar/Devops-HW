const multer = require('multer');
const fs = require('fs');

const db = require('../data/db');
const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1', {});

var express = require('express');
var router = express.Router();

/* GET users listing. */
const upload = multer({ dest: './uploads/' })

router.post('/', upload.single('image'), function (req, res) {
  console.log(req.body) // form fields
  console.log(req.file) // form files

  if (req.file.fieldname === 'image') {
    fs.readFile(req.file.path, async function (err, data) {
      if (err) throw err;
      var img = new Buffer.from(data).toString('base64');

      /* Task 5 */
      client.rpush("for_db_image", img);
      client.lpush("cat", img, async function (error, rep) {
        client.ltrim("cat", 0, 4);
      });

      // /* Task 4 */
      // client.lpush("cat", img);
      // client.ltrim("cat", 0, 4);

      await db.cat(img);
      res.send('Ok');

    });
  }
});

module.exports = router;
