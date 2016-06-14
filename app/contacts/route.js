import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //fetch all the contacts from server
        return this.get('store').findAll('contact');
  },
});
