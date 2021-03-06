import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  auth: Ember.inject.service(),

  contact: {},

  actions: {
    submit () {
      this.sendAction('createContact', this.get('contact'));
      this.set('contact', "");
     this.$('input').focus();
    },

    reset () {
      this.set('contact', {});
      this.sendAction('back');
    },
  },
});
