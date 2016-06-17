import Ember from 'ember';

export default Ember.Component.extend({
  contenteditable: false,

  contact: {},

  actions: {
  cancel: function() {
    this.set('contenteditable', false);
  },

  edit: function() {
    this.set('contenteditable', true);
  },

  save: function() {
    this.set('contenteditable', false);
    this.set('contact.id', this.get('contact.id'));
    this.set('contact.first_name', this.get('contact.first_name'));
    this.set('contact.last_name', this.get('contact.last_name'));
    this.set('contact.occupation', this.get('contact.occupation'));
    this.set('contact.company', this.get('contact.company'));
    this.set('contact.professional_relationship', this.get('contact.professional_relationship'));
    this.set('contact.fact', this.get('contact.fact'));
    this.set('contact.last_contacted', this.get('contact.last_contacted'));
    this.set('contact.reminder', this.get('contact.reminder'));
    this.sendAction('updateContact', this.get('contact'));


  },
}

});
