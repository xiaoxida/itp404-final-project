import Route from '@ember/routing/route';
import { makeArray } from '@ember/array';

export default Route.extend({
  //title: 'Things to Do - Today',
  title: function(tokens) {
    tokens = makeArray(tokens);
    tokens.unshift('Things to Do');
    return tokens.reverse().join(' - ');
  },
  model() {
    return this.store.findAll('task');
  },
  actions: {
    loading(transition) {
      let controller = this.controllerFor('index');
      controller.set('currentlyLoading', true);
      transition.promise.finally(function() {
          controller.set('currentlyLoading', false);
      });
    },
    error(error) {
      if (error.status === '403') {
        this.replaceWith('login');
      } else {
        // Let the route above this handle the error.
        return true;
      }
    }
  },
});
