var express = require('express');
var path = require('path');
var multer = require('multer');

var port = process.env.PORT || 8000;

var upload = multer({ dest: 'uploads/' })

var app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.post('/upload', upload.single('myFile'), (req, res) => {
  console.log('req file: ', req.file);
  console.log('req body: ', req.body);
  res.json({ message: 'File successfully uploaded! I think' });
})

app.get('/download', (req, res) => {
  console.log('yo');
  // res.download('../downloads', 'filledStar.png');
  res.attachment('/downloads/filledStar.png');
  res.end();
})

app.listen(port);
console.log(`Listening on port ${ port }`);