import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  first_name: attr('string'),
  last_name: attr('string'),
  occupation: attr('string'),
  professional_relationship: attr('string'),
  company: attr('string'),
  last_contacted: attr('string'),
  fact: attr('string'),
  reminder: attr('number'),

  fullName: Ember.computed('first_name', 'last_name', function() {
    return `${this.get('first_name')} ${this.get('last_name')}`;
  })
});
