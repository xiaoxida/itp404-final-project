import { Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
  id(i) {
    return i + 1;
  },
  name() {
    return faker.lorem.words();
  },
  notes() {
    return faker.lorem.sentences();
  },
  time() {
    return faker.date.recent();
  },
  deadline() {
    return faker.date.future();
  },
  done() {
    return false;
  },
});
