import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists');
  this.route('details');
  this.route('albums');
  this.route('home');
});

export default Router;
