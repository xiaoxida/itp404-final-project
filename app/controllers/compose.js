import Controller from '@ember/controller';
import RSVP from 'rsvp';
import { later } from '@ember/runloop';

export default Controller.extend({
  actions: {
    createTask() {
      event.preventDefault();
      let task = this.store.createRecord('task', {
        name: this.name,
        notes: this.notes,
      })
      task.save().then(() => {
        this.transitionToRoute('index');
      });
      return new RSVP.Promise((resolve) => {
        later(() => {
          resolve();
        }, 2000);
      });
    },
    cancel(){
      this.transitionToRoute('index');
    },
  }
});
