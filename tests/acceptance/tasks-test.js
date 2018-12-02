import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | tasks', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('delete a task', async function(assert) {
    server.createList('task', 1);
    await visit('/');
    await click('[data-test="delete-task"]');
    assert.dom('[data-test="task"]').exists({ count: 0 });
  });

  test('writing a task', async function(assert) {
    await visit('/tasks/new');
    await fillIn('#name', 'Intro to testing');
    await fillIn('#notes', 'I love testing!');
    await click('[data-test="publish"]');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="name"]').hasText('Intro to testing');
    assert.dom('[data-test="notes"]').hasText('I love testing!');
  });

  test('displays a list of tasks', async function(assert) {
    server.createList('task', 10);

    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('[data-test="task"]').exists({ count: 10 });
  });

  test('viewing the details of a task', async function(assert) {
    await visit('/tasks/new');
    await fillIn('#name', 'Intro to testing');
    await fillIn('#notes', 'I love testing!');
    await click('[data-test="publish"]');
    await visit('/tasks/1/edit');
    assert.equal(currentURL(), '/tasks/1/edit');
    assert.dom('#test-name').hasText('Intro to testing');
    assert.dom('#test-notes').hasText('I love testing!');
  });

  test('edit the details of a task', async function(assert) {
    server.createList('task', 1);
    await visit('/tasks/1/edit');
    await fillIn('#name', 'Intro to testing2');
    await fillIn('#notes', 'I love testing!2');
    await click('[data-test="publish"]');
    await visit('/');
    assert.dom('[data-test="name"]').hasText('Intro to testing2');
    assert.dom('[data-test="notes"]').hasText('I love testing!2');
  });
});
