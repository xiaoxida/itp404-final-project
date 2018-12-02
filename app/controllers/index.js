import Controller from '@ember/controller';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  TaskNotDone: filterBy('model', 'done', false),
  actions: {
    deleteTask(task) {
        task.destroyRecord();
    },
    done(task) {
      task.set('done', true);
      task.save();
    }
  }
});
