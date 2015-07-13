import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  value: DS.attr('number'),
}).reopenClass({
  FIXTURES: [
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
