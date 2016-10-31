import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id); //talking to Firabase to find the specific 'rental' given the params.rental_id, then passing it to  child components.
  },

  actions: {
    destroyListing(listing) {
      listing.destroyRecord();
      this.transitionTo('index');
    },

    update(listing, params) {
      console.log(listing);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          listing.set(key,params[key]);
        }
      });
      listing.save();
      this.transitionTo('index');
    }
  }
});
