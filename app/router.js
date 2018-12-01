import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('upcoming');
  this.route('anytime');
  this.route('logbook');
  this.route('trash');
  this.route('detail');
  this.route('task', { path: '/task/:id' });
});

export default Router;
