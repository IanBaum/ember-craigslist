import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,

  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },

    saveListing() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        category: this.get('category')
      };
      var self = this;
      Object.keys(params).forEach(function(key) {
        self.set(key, ''); //clears the input fields
      });

      this.set('addNewListing', false);
      this.sendAction('saveListing',params);
    }
  }
});
