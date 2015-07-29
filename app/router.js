import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('people', function() {
    this.route('richard');
    this.route('erlich');
    this.route('jared');
    this.route('dinesh');
    this.route('carla');
    this.route('gilfoyle');
  });
});

export default Router;
