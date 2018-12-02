import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Things to Do - Logbook',
  model() {
    return this.store.findAll('task');
  },
  actions: {
    loading(transition) {
      let controller = this.controllerFor('logbook');
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
