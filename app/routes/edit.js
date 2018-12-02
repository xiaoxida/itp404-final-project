import Route from '@ember/routing/route';

export default Route.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('name', model.name);
    controller.set('notes', model.notes);
  },
  model(params) {
    return this.store.findRecord('task', params.id);
  },
  actions: {
    loading(transition) {
      let controller = this.controllerFor('edit');
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
