import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteContact() {
      console.log('clicked');
      this.get('contact').destroyRecord();
    }
  }
});
