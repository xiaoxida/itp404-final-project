import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNameBindings: ['isEmpty:error', 'isTooLong:error'],

  isEmpty: computed('text', function() {
    let textLength = this.text ? this.text.length : 0;
    return textLength == 0;
  }),
  isTooLong: computed('text', function() {
    let textLength = this.text ? this.text.length : 0;
    return textLength > 20;
  }),
});
