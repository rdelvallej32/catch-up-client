import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    createContact(data) {
      console.log(data);
      console.log("clicked");
      let contact = this.get('store').createRecord('contact', data);
      return contact.save()
      .then(() => this.transitionTo('contacts'))
      .then(() => this.get('flashMessages').success('New contact added'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    }

  },

});
