import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('contact', params.id);
  },

  actions: {
    updateContact(data) {
      console.log('clicked');
      console.log(data);
      this.get('store').findRecord('contact', data.id).then(function(contact) {
        contact.first_name = data.first_name;
        contact.last_name = data.last_name;
        contact.occupation = data.occupation;
        contact.company = data.company;
        contact.professional_relationship = data.professional_relationship;
        contact.fact = data.fact;
        contact.last_contacted = data.last_contacted;
        contact.reminder = data.reminder;

        return contact.save();
      });
    }
  }
});
