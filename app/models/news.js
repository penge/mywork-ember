import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Industry and Customer News",
      description: "Catch up on some of the latest news about our company, customers, competitors and more in this week's Industry and Customer News roundup.",
      url: "http://www.merck.com",
    },
    {
      id: 2,
      title: "What Makes a World-Class Supplier?",
      description: "Just look at the extraordinary achievements at MSD sites in Cramlington, United Kingdom, and Swords, Ireland, for the answer.",
      url: "http://www.merck.com",
    },
    {
      id: 3,
      title: "New Development in Business Development: Allergan Enters Into Licensing Agreement with Merck for CGRP Migraine Development Program",
      description: "​Agreement supports Merck’s continued R&D focus on priority therapeutic areas.",
      url: "http://www.merck.com",
    },
    {
      id: 4,
      title: "Industry and Customer News",
      description: "Catch up on some of the latest news about our company, customers, competitors and more in this week's Industry and Customer News roundup.",
      url: "http://www.merck.com",
    },
    {
      id: 5,
      title: "The Merck Manuals Power Up!",
      description: "Digital launch of The Merck Manuals propels the well-known medical resource into the 21st century — and soon, onto every continent.",
      url: "http://www.merck.com",
    },
  ]
});
