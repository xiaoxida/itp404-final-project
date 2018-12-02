import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | characters-remaining', function(hooks) {
  setupRenderingTest(hooks);

  test('Empty Name', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('name', '');
    await render(hbs`
      <CharactersRemaining data-test="characters-remaining" @text={{name}} @max={{10}}/>
    `);

    assert.dom('[data-test="characters-remaining"]').hasText("Name cannot be empty")
  });

  test('Have Name', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('name', 'asd');
    await render(hbs`
      <CharactersRemaining data-test="characters-remaining" @text={{name}} @max={{10}}/>
    `);

    assert.dom('[data-test="characters-remaining"]').hasText("");
  });

  test('Name is too long', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('name', '1234512345123451234512345123123');
    await render(hbs`
      <CharactersRemaining data-test="characters-remaining" @text={{name}} @max={{10}}/>
    `);

    assert.dom('[data-test="characters-remaining"]').hasText("Name cannot exceed 20");
  });
});
