import Ember from 'ember';

export default Ember.Component.extend({
  updateListingForm: false,
  actions: {
    updateFormShow(){
      this.set('updateListingForm', true);
    },

    update(listing) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content')
      };
      this.set('updateListingForm', false);
      var self = this;
      Object.keys(params).forEach(function(key) {
        self.set(key, "");
      });
      this.sendAction('update', listing, params);
    }
  }
});
