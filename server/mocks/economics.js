module.exports = function(app) {
  var express = require('express');
  var economicsRouter = express.Router();

  economicsRouter.get('/', function(req, res) {
    res.send({
      'economics': [
        {
          id: 1,
          title: "Administration",
          value: 28.65,
        },
        {
          id: 2,
          title: "Business programs",
          value: 28.12,
        },
        {
          id: 3,
          title: "Infrastructure & Operations",
          value: 32.36,
        },
        {
          id: 4,
          title: "ISRM",
          value: 2.78,
        },
        {
          id: 5,
          title: "Business Platform Services",
          value: 8.09,
        },
      ]
    });
  });

  economicsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  economicsRouter.get('/:id', function(req, res) {
    res.send({
      'economics': {
        id: req.params.id
      }
    });
  });

  economicsRouter.put('/:id', function(req, res) {
    res.send({
      'economics': {
        id: req.params.id
      }
    });
  });

  economicsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/economics', economicsRouter);
};
