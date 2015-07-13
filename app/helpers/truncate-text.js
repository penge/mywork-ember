import Ember from 'ember';

export function truncateText(params, hash) {
  var text = params[0];
  var limit = hash.limit || 100;

  if (text.length < limit) {
    return text;
  } else {
    return text.substring(0, limit).trim() + '...'
  }
}

export default Ember.Helper.helper(truncateText);
