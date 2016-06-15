import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    createContact(data) {
      console.log(data);
      console.log("clicked");
    }

  },

});
