import Ember from 'ember';

export default Ember.Component.extend({
  contenteditable: false,
  firstName: Ember.computed(function() {
    return this.get('contact.first_name');
  }),
  lastName: Ember.computed(function() {
    return this.get('contact.last_name');
  }),
  occupation: Ember.computed(function() {
    return this.get('contact.occupation');
  }),
  company: Ember.computed(function() {
    return this.get('contact.company');
  }),
  fact: Ember.computed(function() {
    return this.get('contact.fact');
  }),
  lastContacted: Ember.computed(function() {
    return this.get('contact.last_contacted');
  }),
  reminder: Ember.computed(function() {
    return this.get('contact.reminder');
  }),

  contact: {},
  cancel: function() {
    this.set('contenteditable', false);
  },

  edit: function() {
    this.set('contenteditable', true);
  },

  save: function() {
    // this.set('contenteditable', false);
    // this.set('contact.first_name', this.get('contact.firstName'));

  },


});
