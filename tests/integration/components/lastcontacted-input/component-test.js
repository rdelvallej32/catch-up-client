import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lastcontacted-input', 'Integration | Component | lastcontacted input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lastcontacted-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lastcontacted-input}}
      template block text
    {{/lastcontacted-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
