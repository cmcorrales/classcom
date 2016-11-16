var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://user:user@ds151927.mlab.com:51927/inbrain-quiz');

const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://user:user@ds151927.mlab.com:51927/inbrain-quiz', (err, database) => {
  if (err) return console.log(err)
  db = database
});

app.post('/quiz', (req, res) => {
  db.collection('quiz').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var Quiz = require('./models/quiz');

var router = express.Router();

router.use(function(req, res, next) {
  console.log('use router working');
  next();
})

router.get('/', function(req, res) {
    res.json({ message: 'api get function working' });
});
/*
app.post('/quiz', (req, res) => {
  db.collection('quiz').save(req.body, (err, result) => {
     if (err) return console.log(err) console.log('saved to database') res.redirect('/')
   });
 });
*/

router.route('/quiz')

  .post(function(req, res) {
    var quiz = new Quiz();
    quiz.question = req.body.question;
    quiz.answer = req.body.answer;

    quiz.save(function(err) {
      if (err)
        res.send(err);

      res.json({message: 'quiz posted'});
    });
  });
/*
  .get(function(req, res) {
          Quiz.find(function(err, quiz) {
              if (err)
                  res.send(err);

              res.json(quiz);
          });
      });

router.route('/quiz/:quiz_id')
  .get(function(req, res) {
    Quiz.findById(req.params.quiz_id, function(err, quiz) {
      if (err)
        res.send(err);
      res.json(quiz);
    });
  .put(function(req, res) {
    Quiz.findById(req.params.quiz_id, function(err, quiz){
      if(err)
        res.send(err);
      quiz.question = req.body.question;

      quiz.save(function(err) {
        if(err)
          res.send(err);

          res.json({message: 'quiz updated'});
      });
    });
  });
});

.delete(function(req, res) {
  Quiz.remove({
    _id: req.params.quiz_id
  }, function(err, quiz) {
    if (err)
      res.send(err);

      res.json({ message: "deleted"});
  })
})
*/
app.use('/api', router);

app.listen(port)
