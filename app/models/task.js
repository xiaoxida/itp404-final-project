import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  notes: DS.attr('string'),
  time: DS.attr('string'),
  deadline: DS.attr('string'),
});
