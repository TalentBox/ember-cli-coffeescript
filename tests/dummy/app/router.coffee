import EmberRouter from '@ember/routing/router'
import config from 'dummy/config/environment'

Router = Ember.Router.extend
  location: config.locationType

Router.map ->

export default Router
