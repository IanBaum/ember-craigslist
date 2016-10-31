import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({ //hashing = associative table of both tables; now both accessible from
      categories: this.store.findAll('category'),
      listings: this.store.findAll('listing')
    });
  }

});
