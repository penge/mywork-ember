import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      Ember.$('#my-workbench').append('<i>LINE ADDED USING Ember.run</i>');
    });
  },
});
