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
      news: this.store.query('news', { category: "global" }),
      eucan: this.store.query('news', { category: "eucan" }),
      it: this.store.query('news', { category: "it" }),
    });
  }
});
