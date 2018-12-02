import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editTask(task) {
      event.preventDefault();
      task.save().then(() => {
        this.transitionToRoute('index');
      });
    },
    back(){
      this.transitionToRoute('index');
    },
  }
});
