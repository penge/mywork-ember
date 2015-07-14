import Ember from 'ember';

export function dateTime(params/*, hash*/) {
  var timestamp = params[0];
  if (!timestamp) {
    return "";
  }

  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  var date  = new Date(timestamp * 1000);
  var year  = "" + date.getFullYear();
  var month = "" + months[date.getMonth()];
  var day   = "" + date.getDate();
  if (day.length === 1) {
    day = "0" + day;
  }

  return day + '-' + month + '-' + year;
}

export default Ember.Helper.helper(dateTime);
