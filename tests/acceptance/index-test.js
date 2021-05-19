import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { currentURL, find, visit } from '@ember/test-helpers';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.equal(find('.test-result').innerText, 'Howdy');
  });
});
