import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Controller.extend({
  appName: 'Ember Twiddle',

  myStorage: storageFor('my-storage'),

  serviceProp: Ember.computed.alias('myStorage.serviceProp'),
});
