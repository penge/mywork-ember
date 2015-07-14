module.exports = function(app) {
  var express = require('express');
  var newsRouter = express.Router();

  newsRouter.get('/', function(req, res) {
    var news = [
      {
        id: 1,
        title: "Industry and Customer News",
        description: "Catch up on some of the latest news about our company, customers, competitors and more in this week's Industry and Customer News roundup.",
        url: "http://www.merck.com",
        category: "global",
      },
      {
        id: 2,
        title: "What Makes a World-Class Supplier?",
        description: "Just look at the extraordinary achievements at MSD sites in Cramlington, United Kingdom, and Swords, Ireland, for the answer.",
        url: "http://www.merck.com",
        category: "global",
      },
      {
        id: 3,
        title: "New Development in Business Development: Allergan Enters Into Licensing Agreement with Merck for CGRP Migraine Development Program",
        description: "​Agreement supports Merck’s continued R&D focus on priority therapeutic areas.",
        url: "http://www.merck.com",
        category: "global",
      },
      {
        id: 4,
        title: "Industry and Customer News",
        description: "Catch up on some of the latest news about our company, customers, competitors and more in this week's Industry and Customer News roundup.",
        url: "http://www.merck.com",
        category: "global",
      },
      {
        id: 5,
        title: "The Merck Manuals Power Up!",
        description: "Digital launch of The Merck Manuals propels the well-known medical resource into the 21st century — and soon, onto every continent.",
        url: "http://www.merck.com",
        category: "global",
      },
      {
        id: 6,
        title: "Take the Focus Matters Challenge to Find Out how well you know our business!",
        description: "Desc...",
        url: "http://www.merck.com",
        category: "eucan",
        timestamp: "1436313600",
      },
      {
        id: 7,
        title: "The European Pharmaceutical industry in key figures",
        description: "Desc...",
        url: "http://www.merck.com",
        category: "eucan",
        timestamp: "1436313600",
      },
      {
        id: 8,
        title: "The Ripple Effect",
        description: "Desc...",
        url: "http://www.merck.com",
        category: "eucan",
        timestamp: "1436140800",
      },
      {
        id: 9,
        title: "Merck Announces Phase 3 Study of Single-Dose EMEND® (fosaprepitant dimeglumine) for Injection Regimen Met Primary Endpoint in Prevention of Chemotherapy-Induced Nausea and Vomiting in Patients Receiving",
        description: "Desc...",
        url: "http://www.merck.com",
        category: "eucan",
        timestamp: "1435708800",
      },
      {
        id: 10,
        title: "30 Years of Innovation in the Treatment of HIV",
        description: "Desc...",
        url: "http://www.merck.com",
        category: "eucan",
        timestamp: "1435708800",
      },
      {
        id: 11,
        title: "Singapore Observes Hari Raya Aidilfitri on July 17",
        description: "Desc...",
        url: "http://www.merck.com",
        category: "it",
        timestamp: "1436832000",
      },
      {
        id: 12,
        title: "Virtualization of Legacy AlphaServer Systems Completed",
        description: "Desc...",
        url: "http://www.merck.com",
        category: "it",
        timestamp: "1436400000",
      },
      {
        id: 13,
        title: "Our Platform Strategy",
        description: "Desc...",
        url: "http://www.merck.com",
        category: "it",
        timestamp: "1436313600",
      },
      {
        id: 14,
        title: "Up Close and Personal with 2015 IT Interns",
        description: "Desc...",
        url: "http://www.merck.com",
        category: "it",
        timestamp: "1436313600",
      },
      {
        id: 15,
        title: "Coming Together for Prague Innovation Days 2015",
        description: "Desc...",
        url: "http://www.merck.com",
        category: "it",
        timestamp: "1436313600",
      },
    ]

    var category = req.query.category;
    if (category) {
      news = news.filter(function(obj) {
        return obj.category === category;
      });
    }

    res.send({ 'news': news });
  });

  newsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  newsRouter.get('/:id', function(req, res) {
    res.send({
      'news': {
        id: req.params.id
      }
    });
  });

  newsRouter.put('/:id', function(req, res) {
    res.send({
      'news': {
        id: req.params.id
      }
    });
  });

  newsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/news', newsRouter);
};
