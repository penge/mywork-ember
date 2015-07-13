import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.Object.create({
      economics: this.store.findAll('economic'),
      links: [
        {
          title: 'myCareer',
          url: 'http://mycareer.merck.com/',
        },
        {
          title: 'Merck News (Yahoo)',
          url: 'http://finance.yahoo.com/q?s=MRK'
        },
      ],
    });
  }
});
