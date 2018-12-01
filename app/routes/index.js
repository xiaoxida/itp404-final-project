import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Things to Do - Today',
  model() {
    return this.store.findAll('task');
  },
});
